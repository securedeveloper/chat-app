import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure, ShallowWrapper} from 'enzyme';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {LANGUAGE_FR, SEND_KEY_MODE_CTRL_ENTER, THEME_LIGHT, TIME_FORMAT_24H} from "../../../models/interfaces";
import {generateDummyUserName} from "../../../utils";
import Settings, {SettingsProps} from "../../../components/settings";
import {defaultState} from "../../../models/reducers";

const initialState = defaultState;
const mockStore = configureStore();

configure({adapter: new Adapter()});

const userName: string = generateDummyUserName();

const props: SettingsProps = {
    userName,
    theme: THEME_LIGHT,
    timeFormat: TIME_FORMAT_24H,
    language: LANGUAGE_FR,
    sendKeyMode: SEND_KEY_MODE_CTRL_ENTER,
    changeUserName: jest.fn(),
    changeTimeFormat: jest.fn(),
    changeLanguage: jest.fn(),
    changeTheme: jest.fn(),
    changeSendKeyMode: jest.fn()
};

describe("components >> settings >> <Settings />", () => {
    let store, app: ShallowWrapper, wrapper: ShallowWrapper<SettingsProps>;

    beforeEach(() => {
        store = mockStore(initialState);

        app = shallow(
            <Provider store={store}>
                <Settings {...props} />
            </Provider>
        );

        wrapper = app.find(Settings);
    });

    it("renders without crashing", () => {
        expect(app.exists()).toBeTruthy();
        expect(wrapper.exists()).toBeTruthy();
    });
});
