import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {
    AVAILABLE_SEND_KEY_MODES,
    Language,
    LANGUAGE_DE, SEND_KEY_MODE_CTRL_ENTER,
    SendKeyMode,
} from "../../../models/interfaces";
import {DropdownButton, FormControl, Dropdown} from "react-bootstrap";
import InputSendKeyMode, {InputSendKeyModeProps} from "../../../components/settings/InputSendKeyMode";
import {translation} from "../../../utils/translation";

configure({adapter: new Adapter()});

const selectedLanguage: Language = LANGUAGE_DE;
const selectedSendMode: SendKeyMode = SEND_KEY_MODE_CTRL_ENTER;

const props: InputSendKeyModeProps = {
    language: selectedLanguage,
    sendKeyMode: selectedSendMode,
    handleSendKeyModeChange: jest.fn()
};

const OPTIONS = AVAILABLE_SEND_KEY_MODES.map(item => translation[selectedLanguage][item]);

describe("Components >> settings >> <InputSendKeyMode />", () => {
    const wrapper = shallow(<InputSendKeyMode {...props}/>);

    it("renders the component without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it("renders send key mode selection button", () => {
        expect(wrapper.find(DropdownButton)).toHaveLength(1);
    });

    it("renders send key mode selection options correctly translated", () => {
        wrapper.find(Dropdown.Item).forEach((item, index) => {
            expect(item.text()).toBe(OPTIONS[index]);
        })
    });

    it("renders the selected send key mode", () => {
        expect(wrapper.find(FormControl)).toHaveLength(1);
        expect(wrapper.find(FormControl).props().value).toBe(translation[selectedLanguage][selectedSendMode]);
    });
});
