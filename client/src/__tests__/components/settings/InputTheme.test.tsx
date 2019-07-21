import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {
    AVAILABLE_THEMES,
    Language,
    LANGUAGE_DE,
    Theme,
    THEME_LIGHT
} from "../../../models/interfaces";
import {DropdownButton, FormControl, Dropdown} from "react-bootstrap";
import InputTheme, {InputThemeProps} from "../../../components/settings/InputTheme";
import {translation} from "../../../utils/translation";

configure({adapter: new Adapter()});

const selectedLanguage: Language = LANGUAGE_DE;
const selectedTheme: Theme = THEME_LIGHT

const props: InputThemeProps = {
    language: selectedLanguage,
    theme: selectedTheme,
    handleThemeChange: jest.fn()
};

const OPTIONS = AVAILABLE_THEMES.map(item => translation[selectedLanguage][item]);

describe("Components >> settings >> <InputTheme />", () => {
    const wrapper = shallow(<InputTheme {...props}/>);

    it("renders the component without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it("renders theme selection button", () => {
        expect(wrapper.find(DropdownButton)).toHaveLength(1);
    });

    it("renders theme selection options correctly translated", () => {
        wrapper.find(Dropdown.Item).forEach((item, index) => {
            expect(item.text()).toBe(OPTIONS[index]);
        })
    });

    it("renders the selected theme", () => {
        expect(wrapper.find(FormControl)).toHaveLength(1);
        expect(wrapper.find(FormControl).props().value).toBe(translation[selectedLanguage][selectedTheme]);
    });
});
