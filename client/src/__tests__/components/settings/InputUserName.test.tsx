import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {ITEM_USER_NAME, Language, LANGUAGE_FR} from "../../../models/interfaces";
import {FormControl, InputGroup} from "react-bootstrap";
import InputUserName, {InputUserNameProps} from "../../../components/settings/InputUserName";
import {translation} from "../../../utils/translation";
import {generateDummyUserName} from "../../../utils";

configure({adapter: new Adapter()});

const selectedLanguage: Language = LANGUAGE_FR;
const selectedUserName: string = generateDummyUserName();

const props: InputUserNameProps = {
    language: selectedLanguage,
    userName: selectedUserName,
    handleUserNameChange: jest.fn()
};

describe("Components >> settings >> <InputUserName />", () => {
    const wrapper = shallow(<InputUserName {...props}/>);

    it("renders the component without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find(InputGroup).exists()).toBeTruthy();
    });

    it("renders username label", () => {
        const label: string = translation[selectedLanguage][ITEM_USER_NAME];

        expect(wrapper.find(InputGroup.Text)).toHaveLength(1);
        expect(wrapper.find(InputGroup.Text).text()).toBe(label);
    });

    it("renders username input", () => {
        expect(wrapper.find(FormControl)).toHaveLength(1);
        expect(wrapper.find(FormControl).props().value).toBe(selectedUserName);
    });
});
