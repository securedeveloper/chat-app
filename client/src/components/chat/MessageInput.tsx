import React, {useRef, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import {Dropdown, DropdownButton, FormControl} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
    AVAILABLE_MESSAGE_TYPES,
    Language,
    MESSAGE_TYPE_TEXT,
    MessageType, SEND_KEY_MODE_CTRL_ENTER, SEND_KEY_MODE_ENTER,
    SendKeyMode,
    Theme
} from "../../models/interfaces";
import {getContrast, getContrastColor} from "../../utils";
import SendButton from "./SendButton";
import {translation} from "../../utils/translation";

const useMessageInput = (initialState: MessageInputState) => {
    const [type, setMessageType] = useState(initialState.type);
    const [message, setMessage] = useState(initialState.message);

    const handleMessageType = (type: MessageType) => setMessageType(type);
    const handleMessage = (message: string) => setMessage(message);

    return {type, message, handleMessageType, handleMessage};
};

const defaultState: MessageInputState = {
    type: MESSAGE_TYPE_TEXT,
    message: ''
};

const MessageInput: React.FC<MessageInputProps> = (props: MessageInputProps) => {
    const messagesInputRef = useRef<any>(null);

    const {type, message, handleMessageType, handleMessage} = useMessageInput(defaultState);
    const {theme, sendKeyMode} = props;

    const renderAvailableMessageTypes = () => {
        return AVAILABLE_MESSAGE_TYPES.map(renderAvailableMessageType);
    };

    const renderAvailableMessageType = (type: MessageType, index: number) => {
        const {language} = props;

        return (
            <Dropdown.Item
                key={index}
                href="#"
                onClick={() => handleMessageType(type)}>
                {translation[language][type]}
            </Dropdown.Item>
        );
    };

    const handleMessageSend = () => {
        props.onMessage(type, message);

        handleMessage(defaultState.message);
        handleMessageType(defaultState.type);

        // @ts-ignore
        messagesInputRef.current.focus();
    };

    const getButtonVariant = (): ButtonVariant => {
        const {theme} = props;

        return `outline-${getContrast(theme)}` as ButtonVariant;
    };

    const handleKeyPress = (target: any) => {
        if (!message) {
            return;
        }

        if (target.key === 'Enter') {

            if (
                sendKeyMode === SEND_KEY_MODE_ENTER ||
                (target.ctrlKey && sendKeyMode === SEND_KEY_MODE_CTRL_ENTER)
            ) {
                handleMessageSend();
            }
        }
    };

    return (
        <Row className={`message-input`}>
            <Col>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={type}
                        id="input-group-dropdown-1"
                        block="true">
                        {renderAvailableMessageTypes()}
                    </DropdownButton>
                    <FormControl
                        ref={messagesInputRef}
                        type="text"
                        value={message}
                        onKeyPress={handleKeyPress}
                        onChange={(event: any) => handleMessage(event.target.value)}/>
                    <InputGroup.Append>
                        <Button
                            disabled={!message}
                            onClick={handleMessageSend}
                            variant={getButtonVariant()}>
                            <SendButton color={getContrastColor(theme)} width={`22px`} height={`20px`}/>
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    );
};

type ButtonVariant = "outline-light" | "outline-dark";

interface MessageInputState {
    type: MessageType;
    message: string;
}

export interface MessageInputProps {
    theme: Theme;
    language: Language;
    sendKeyMode: SendKeyMode;
    onMessage: (type: MessageType, message: string) => void;
}

export default MessageInput;
