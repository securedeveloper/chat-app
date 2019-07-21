import React, {useEffect, useRef} from 'react'
import {Message, Theme, TimeFormat} from "../../models/interfaces";
import MessageItem from "./MessageItem";

import "./MessageList.scss";

const MessageList: React.FC<MessageListProps> = (props: MessageListProps) => {
    const messagesEndRef = useRef<HTMLDivElement>(document.createElement("div"))

    const scrollToBottom = () => {
        messagesEndRef.current.scroll({behavior: "smooth", top: messagesEndRef.current.scrollHeight})
    };

    useEffect(scrollToBottom, [props.messages]);

    const renderMessages = () => {
        return (
            <div className="message-list" ref={messagesEndRef}>
                {props.messages.map(renderMessage)}
            </div>
        );
    };

    const renderMessage = (message: Message, index: number) => {
        const {timeFormat, userName, theme} = props;

        return (
            <MessageItem
                theme={theme}
                userName={userName}
                key={index}
                message={message}
                timeFormat={timeFormat}/>
        );
    };

    return (
        <div className={`message-container ${props.theme}`}>
            {renderMessages()}
        </div>
    );
};

export interface MessageListProps {
    userName: string;
    messages: Message[];
    theme: Theme;
    timeFormat: TimeFormat;
}

export default MessageList;
