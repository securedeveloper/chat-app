import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from 'enzyme';
import Header from "../../components/Header";
import {AppProps} from "../../App";
import {ITEM_CHAT, ITEM_SETTINGS, LANGUAGE_FR, THEME_LIGHT, TIME_FORMAT_24H} from "../../models/interfaces";
import {generateDummyMessages, generateDummyUserName} from "../../utils";
import {Nav, NavItem} from "react-bootstrap";
import {Badge} from "react-bootstrap";
import {translation} from "../../utils/translation";


configure({adapter: new Adapter()});

const userName: string = generateDummyUserName();
const totalMessages: number = 5;

const props: AppProps = {
    userName,
    theme: THEME_LIGHT,
    timeFormat: TIME_FORMAT_24H,
    language: LANGUAGE_FR,
    messages: generateDummyMessages(totalMessages, userName)
};

describe("components >> <Header />", () => {
    const wrapper = shallow(<Header {...props} />)

    it("renders without crashing", () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.hasClass('header')).toBeTruthy();
    });

    it("renders menu items", () => {
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });

    it("renders counter with correct count", () => {
        expect(wrapper.find(Badge).text()).toBe(`${totalMessages}`);
    });

    it("renders correct translated menu items", () => {
        const translatedMenuItems = [
            `${translation[props.language][ITEM_CHAT]} ${totalMessages}`,
            translation[props.language][ITEM_SETTINGS]
        ];
        wrapper.find(Nav.Link).forEach((item, index) => {
            expect(item.text()).toBe(translatedMenuItems[index]);
        })
    });
});
