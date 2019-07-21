import React from "react";
import {connect} from "react-redux";
import {getClassNames, getFormattedTime} from "../../utils";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import {Message, MessageType, Store, TIME_FORMAT_12H, UIProps} from "../../models/interfaces";

import "./Chat.scss";

class Chat extends React.Component<ChatProps> {
    public render(): React.ReactElement<ChatProps> {
        const {theme, timeFormat, messages, userName, language, sendKeyMode} = this.props;

        return (
            <Row className={getClassNames(`chat`, this.props)}>
                <Col md={12}>
                    <MessageList
                        userName={userName}
                        messages={messages}
                        theme={theme}
                        timeFormat={timeFormat}/>
                </Col>
                <Col>
                    <MessageInput
                        sendKeyMode={sendKeyMode}
                        language={language}
                        theme={theme}
                        onMessage={this.handleOnMessage}/>
                </Col>
            </Row>
        );
    }

    private handleOnMessage = (type: MessageType, message: string) => {
        const {socketClient, userName} = this.props;

        if (!socketClient) {
            this.showToast("Not connected", "Please check and verify if client is connected with serve");
            return;
        }

        const newMessage: Message = {type, clientId: socketClient.id, userName, message, timestamp: Date.now()};

        socketClient.emit("message", newMessage);
    };

    private showToast = (title: string, message: string) => {
        return (
            <Toast show={true} autohide={true} transition={true}>
                <Toast.Header>
                    <strong className="mr-auto">{title}</strong>
                    <small>{getFormattedTime(Date.now(), TIME_FORMAT_12H)}</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        );
    };
}

export interface ChatProps extends UIProps {
    socketClient?: SocketIOClient.Socket;
    messages: Message[];
}

const mapStateToProps = (state: Store, props: ChatProps): ChatProps => ({
    ...props,
    ...state.ui,
    socketClient: state.socket,
    messages: state.messages
});

export default connect(mapStateToProps, null)(Chat);
