import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {LANGUAGE_EN, SEND_KEY_MODE_ENTER, THEME_DARK} from "../../../models/interfaces";
import MessageInput, {MessageInputProps} from "../../../components/chat/MessageInput";
import {Button, DropdownButton, FormControl} from "react-bootstrap";
import {InputGroup} from "react-bootstrap";


configure({adapter: new Adapter()});


const props: MessageInputProps = {
    theme: THEME_DARK,
    language: LANGUAGE_EN,
    sendKeyMode: SEND_KEY_MODE_ENTER,
    onMessage: jest.fn
};

describe("Components >> chat >> <MessageInput />", () => {
    const wrapper = shallow(<MessageInput {...props}/>);

    it("renders the component without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it("renders the message type selection", () => {
        expect(wrapper.find(DropdownButton)).toHaveLength(1);
    });

    it("renders the message input", () => {
        expect(wrapper.find(FormControl)).toHaveLength(1);
    });

    it("renders the send button", () => {
        expect(wrapper.find(InputGroup.Append).find(Button)).toHaveLength(1);
    });

    it("should disabled send button with no input", () => {
        expect(wrapper.find(InputGroup.Append).find(Button).props().disabled).toBeTruthy();
    });

    it("should enable send button with a valid message input", () => {
        const input = wrapper.find(FormControl);
        const newMessage = "A new message";

        input.simulate("change", {target: {value: newMessage}});


        expect(wrapper.find(InputGroup.Append).find(Button).props().disabled).toBeFalsy();
    });
});
