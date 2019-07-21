import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {THEME_DARK, TIME_FORMAT_12H} from "../../../models/interfaces";
import {generateDummyUserName, generateDummyMessages} from "../../../utils";
import MessageList, {MessageListProps} from "../../../components/chat/MessageList";
import MessageItem from "../../../components/chat/MessageItem";


configure({adapter: new Adapter()});


const userName: string = generateDummyUserName();

const totalMessages: number = 5;

const props: MessageListProps = {
    theme: THEME_DARK,
    userName,
    messages: generateDummyMessages(totalMessages, userName),
    timeFormat: TIME_FORMAT_12H
};

describe("Components >> chat >> <MessageList />", () => {
    let wrapper = shallow(<MessageList {...props}/>);

    it("renders the component without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.hasClass('message-container')).toBeTruthy();
        expect(wrapper.find('.message-list')).toHaveLength(1);
    });

    it("renders messages provided as props", () => {
        expect(wrapper.find(MessageItem)).toHaveLength(totalMessages);
    });
});
