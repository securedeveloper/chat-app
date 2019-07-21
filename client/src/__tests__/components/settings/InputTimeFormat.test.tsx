import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import {
    AVAILABLE_TIME_FORMATS,
    Language,
    LANGUAGE_DE,
    TIME_FORMAT_24H, TimeFormat
} from "../../../models/interfaces";
import {DropdownButton, FormControl, Dropdown} from "react-bootstrap";
import InputTimeFormat, {InputTimeFormatProps} from "../../../components/settings/InputTimeFormat";

configure({adapter: new Adapter()});

const selectedLanguage: Language = LANGUAGE_DE;
const selectedTimeFormat: TimeFormat = TIME_FORMAT_24H;

const props: InputTimeFormatProps = {
    language: selectedLanguage,
    timeFormat: selectedTimeFormat,
    handleTimeFormatChange: jest.fn()
};

const OPTIONS = AVAILABLE_TIME_FORMATS;

describe("Components >> settings >> <InputTimeFormat />", () => {
    const wrapper = shallow(<InputTimeFormat {...props}/>);

    it("renders the component without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it("renders time formats selection button", () => {
        expect(wrapper.find(DropdownButton)).toHaveLength(1);
    });

    it("renders time formats selection options correctly translated", () => {
        wrapper.find(Dropdown.Item).forEach((item, index) => {
            expect(item.text()).toBe(OPTIONS[index]);
        })
    });

    it("renders the selected theme", () => {
        expect(wrapper.find(FormControl)).toHaveLength(1);
        expect(wrapper.find(FormControl).props().value).toBe(selectedTimeFormat);
    });
});
