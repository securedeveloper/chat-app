import React from "react";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import {translation} from "../../utils/translation";
import {
    AVAILABLE_SEND_KEY_MODES,
    ITEM_SEND_KEY_MODE,
    Language, SendKeyMode,
} from "../../models/interfaces";
import {Dropdown, DropdownButton, FormControl} from "react-bootstrap";


const InputSendKeyMode: React.FC<InputSendKeyModeProps> = (props: InputSendKeyModeProps) => {
    const {language, sendKeyMode, handleSendKeyModeChange} = props;


    const renderSendKeyModeSelectionItem = (sendKeyMode: SendKeyMode, index: number) => {
        return (
            <Dropdown.Item key={index} href="#" onClick={() => handleSendKeyModeChange(sendKeyMode)}>
                {translation[language][sendKeyMode]}
            </Dropdown.Item>
        );
    };

    return (
        <>
            <Col md={6} sm={12} className={'settings-input theme'}>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={translation[language][ITEM_SEND_KEY_MODE]}
                        id="send-key-mode"
                        block="true">
                        {AVAILABLE_SEND_KEY_MODES.map(renderSendKeyModeSelectionItem)}
                    </DropdownButton>
                    <FormControl
                        type="text"
                        value={translation[language][sendKeyMode]}
                        disabled={true}/>
                </InputGroup>
            </Col>
            <Col md={6}/>
        </>
    );
};

export interface InputSendKeyModeProps {
    language: Language;
    sendKeyMode: SendKeyMode;
    handleSendKeyModeChange: (sendKeyMode: SendKeyMode) => void
}

export default InputSendKeyMode;
