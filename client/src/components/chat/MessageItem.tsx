import React from "react";
import Emoji from "react-emoji-render";
import {Image} from "react-bootstrap";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";
import {
    Message,
    MESSAGE_MODE_RECEIVED,
    MESSAGE_MODE_SENT, MESSAGE_TYPE_AUDIO, MESSAGE_TYPE_IMAGE, MESSAGE_TYPE_TEXT, MESSAGE_TYPE_URL, MESSAGE_TYPE_VIDEO,
    MessageMode,
    Theme,
    TimeFormat
} from "../../models/interfaces";
import {getFormattedTime} from "../../utils";

import "./MessageItem.scss";

const MessageItem: React.FC<MessageItemProps> = (props: MessageItemProps) => {
    const {userName, message, timeFormat, theme} = props;
    const messageStatus: MessageMode = userName === message.userName ? MESSAGE_MODE_SENT : MESSAGE_MODE_RECEIVED;

    const renderPlayer = (url: string) => <ReactPlayer width="100%" controls={true} url={url} playing={false}/>;
    const renderImage = (url: string) => <Image src={url} fluid={true}/>;
    const renderURL = (url: string) => (
        <>
            <div><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>
            <Iframe url={url} width="100%" height="400px"/>
        </>);
    const renderText = (content: string) => <Emoji text={content}/>;

    const renderMessageBody = (message: Message) => {
        const {type, message: content} = message;

        switch (type) {
            case MESSAGE_TYPE_VIDEO:
            case MESSAGE_TYPE_AUDIO:
                return renderPlayer(content);

            case MESSAGE_TYPE_IMAGE:
                return renderImage(content);

            case MESSAGE_TYPE_URL:
                return renderURL(content);

            case MESSAGE_TYPE_TEXT:
                return renderText(content);

            default:
                return content;
        }
    };

    return (
        <div className={`message-item-container ${messageStatus} ${theme}`}>
            <div className={`message-item ${messageStatus} ${theme}`}>
                {/*Message Header*/}
                <div className={'message-item-header'}>
                    <span className={`message-ribbon-${messageStatus}`}/>
                    <span className={`message-info`}>
                        <span className={`message-info-user-name`}>
                            {messageStatus === MESSAGE_MODE_RECEIVED ? message.userName : ''}
                        </span>
                        {' @'}
                        <span className={`message-info-timestamp`}>
                            {getFormattedTime(message.timestamp, timeFormat)}
                        </span>
                    </span>
                </div>

                {/*Message Body*/}
                <div className={`message-item-body ${message.type}`}>
                    {renderMessageBody(message)}
                </div>
            </div>
        </div>
    );
}

export interface MessageItemProps {
    theme: Theme;
    userName: string;
    message: Message;
    timeFormat: TimeFormat;
}

export default MessageItem;
