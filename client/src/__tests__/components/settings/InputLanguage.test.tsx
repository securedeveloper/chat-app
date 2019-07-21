import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {AVAILABLE_LANGUAGES, Language, LANGUAGE_DE} from "../../../models/interfaces";
import {DropdownButton, FormControl, Dropdown} from "react-bootstrap";
import InputLanguage, {InputLanguageProps} from "../../../components/settings/InputLanguage";
import {translation} from "../../../utils/translation";

configure({adapter: new Adapter()});

const selectedLanguage: Language = LANGUAGE_DE;

const props: InputLanguageProps = {
    language: selectedLanguage,
    handleLanguageChange: jest.fn()
};

const LANGUAGE_INPUTS = AVAILABLE_LANGUAGES.map(item => translation[selectedLanguage][item]);

describe("Components >> settings >> <InputLanguage />", () => {
    const wrapper = shallow(<InputLanguage {...props}/>);

    it("renders the component without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it("renders the language selection button", () => {
        expect(wrapper.find(DropdownButton)).toHaveLength(1);
    });

    it("renders the language options correctly translated", () => {
        wrapper.find(Dropdown.Item).forEach((item, index) => {
            expect(item.text()).toBe(LANGUAGE_INPUTS[index]);
        })
    });

    it("renders the selected language", () => {
        expect(wrapper.find(FormControl)).toHaveLength(1);
        expect(wrapper.find(FormControl).props().value).toBe(translation[selectedLanguage][selectedLanguage]);
    });
});
