import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure, ShallowWrapper} from 'enzyme';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {LANGUAGE_FR, THEME_LIGHT, TIME_FORMAT_24H} from "../../../models/interfaces";
import {generateDummyMessages, generateDummyUserName} from "../../../utils";
import Chat, {ChatProps} from "../../../components/chat";
import {defaultState} from "../../../models/reducers";

const initialState = defaultState;
const mockStore = configureStore();


configure({adapter: new Adapter()});

const userName: string = generateDummyUserName();
const totalMessages: number = 5;

const props: ChatProps = {
    userName,
    theme: THEME_LIGHT,
    timeFormat: TIME_FORMAT_24H,
    language: LANGUAGE_FR,
    messages: generateDummyMessages(totalMessages, userName)
};

describe("components >> chat >> <Chat />", () => {
    let store, app: ShallowWrapper, wrapper: ShallowWrapper<ChatProps>;

    beforeEach(() => {
        store = mockStore(initialState);

        app = shallow(
            <Provider store={store}>
                <Chat {...props} />
            </Provider>
        );

        wrapper = app.find(Chat);
    });

    it("renders without crashing", () => {
        expect(app.exists()).toBeTruthy();
        expect(wrapper.exists()).toBeTruthy();
    });
});
