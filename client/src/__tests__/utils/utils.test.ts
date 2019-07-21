import {
    generateDummyMessages,
    generateDummyUserName,
    getClassNames,
    getContrast,
    getContrastColor,
    getFormattedTime
} from "../../utils";
import {defaultUI} from "../../models/reducers";
import {
    DARKER_COLOR,
    LIGHTER_COLOR,
    THEME_DARK,
    THEME_LIGHT, TIME_FORMAT_12H,
    TIME_FORMAT_24H,
    UIProps
} from "../../models/interfaces";

const props: UIProps = defaultUI;

describe("src >> utils", () => {
    it(">> getClassNames >> works as expected", () => {
        expect(getClassNames(`class1`, props)).toBe(`class1 ${props.theme}`);
    });

    it(">> generateDummyUserName >> works as expected", () => {
        expect(generateDummyUserName().match(/^user/)).toBeTruthy();
    });

    it(">> getContrast >> works as expected", () => {
        expect(getContrast(THEME_DARK)).toBe(THEME_LIGHT);
        expect(getContrast(THEME_LIGHT)).toBe(THEME_DARK);
    });

    it(">> getContrastColor >> works as expected", () => {
        expect(getContrastColor(THEME_DARK)).toBe(LIGHTER_COLOR);
        expect(getContrastColor(THEME_LIGHT)).toBe(DARKER_COLOR);
    });

    it(">> getFormattedTime >> works as expected", () => {
        const regex24H = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/;
        const regex12H = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9] ?([AaPp][Mm])$/;

        expect(getFormattedTime(Date.now(), TIME_FORMAT_24H).match(regex24H)).toBeTruthy();
        expect(getFormattedTime(Date.now(), TIME_FORMAT_12H).match(regex12H)).toBeTruthy();
    });

    it(">> generateDummyMessages >> works as expected", () => {
        const messagesRequired: number = 5;
        const userName: string = generateDummyUserName();

        expect(generateDummyMessages(messagesRequired, userName)).toHaveLength(messagesRequired);
    });
});
