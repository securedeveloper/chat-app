import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import MessageItem, {MessageItemProps} from "../../../components/chat/MessageItem";
import {
    MESSAGE_TYPE_AUDIO, MESSAGE_TYPE_IMAGE,
    MESSAGE_TYPE_TEXT, MESSAGE_TYPE_URL,
    MESSAGE_TYPE_VIDEO,
    THEME_DARK,
    TIME_FORMAT_12H
} from "../../../models/interfaces";
import {getFormattedTime, generateDummyUserName} from "../../../utils";
import Emoji from "react-emoji-render";
import {Image} from "react-bootstrap";
import ReactPlayer from "react-player";
import Iframe from "react-iframe";

configure({adapter: new Adapter()});

const userName: string = generateDummyUserName();

const props: MessageItemProps = {
    theme: THEME_DARK,
    userName,
    message: {
        clientId: "",
        userName,
        type: MESSAGE_TYPE_TEXT,
        message: "A Message",
        timestamp: Date.now()
    },
    timeFormat: TIME_FORMAT_12H
};

describe("Components >> chat >> <MessageItem />", () => {
    let wrapper = shallow(<MessageItem {...props}/>);

    it("renders the component without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it("renders no userName if not the sender", () => {
        expect(wrapper.find('.message-info-user-name').text()).toBe("");
    });

    it("renders userName if not the sender", () => {
        const userName: string = generateDummyUserName();

        wrapper = shallow(<MessageItem {...props} userName={userName}/>);

        expect(wrapper.find('.message-info-user-name').text()).toBe(props.message.userName);
    });

    it("renders correctly formatted time", () => {
        const formattedTime: string = getFormattedTime(props.message.timestamp, props.timeFormat);

        expect(wrapper.find('.message-info-timestamp').text()).toBe(formattedTime);
    });

    it("renders message body", () => {
        expect(wrapper.find(Emoji).exists()).toBeTruthy();
    });

    it("renders video message", () => {
        const videoMessageProps: MessageItemProps = {
            ...props,
            message: {
                ...props.message,
                type: MESSAGE_TYPE_VIDEO
            }
        };

        wrapper = shallow(<MessageItem {...videoMessageProps}/>);
        expect(wrapper.find(ReactPlayer).exists()).toBeTruthy();
    });

    it("renders audio message", () => {
        const audioMessageProps: MessageItemProps = {
            ...props,
            message: {
                ...props.message,
                type: MESSAGE_TYPE_AUDIO
            }
        };

        wrapper = shallow(<MessageItem {...audioMessageProps}/>);
        expect(wrapper.find(ReactPlayer).exists()).toBeTruthy();
    });

    it("renders image message", () => {
        const imageMessageProps: MessageItemProps = {
            ...props,
            message: {
                ...props.message,
                type: MESSAGE_TYPE_IMAGE
            }
        };

        wrapper = shallow(<MessageItem {...imageMessageProps}/>);
        expect(wrapper.find(Image).exists()).toBeTruthy();
    });

    it("renders URL message", () => {
        const uRLMessageProps: MessageItemProps = {
            ...props,
            message: {
                ...props.message,
                type: MESSAGE_TYPE_URL
            }
        };

        wrapper = shallow(<MessageItem {...uRLMessageProps}/>);
        expect(wrapper.find(Iframe).exists()).toBeTruthy();
    });
});
