import Actions, {ActionType, IAction} from "../../models/actions"
import reducer from "../../models/reducers";

import {
    Language,
    LANGUAGE_FR,
    Message,
    MESSAGE_TYPE_TEXT, SEND_KEY_MODE_CTRL_ENTER, SendKeyMode, Store,
    Theme,
    THEME_DARK,
    TIME_FORMAT_24H,
    TimeFormat
} from "../../models/interfaces";

import {defaultState} from "../../models/reducers";

describe(">> Reducers", () => {
    let state: Store = defaultState, action: IAction, expectedState: Store;

    beforeEach(() => {
        state = defaultState;
    });

    it(`>> ${ActionType.CHANGE_USER_NAME}`, () => {
        const userName: string = 'user101';

        action = Actions.changeUserName(userName);

        expectedState = {
            ...state,
            ui: {
                ...state.ui,
                userName
            }
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`>> ${ActionType.CHANGE_TIME_FORMAT}`, () => {
        const timeFormat: TimeFormat = TIME_FORMAT_24H;

        action = Actions.changeTimeFormat(timeFormat);

        expectedState = {
            ...state,
            ui: {
                ...state.ui,
                timeFormat
            }
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`>> ${ActionType.CHANGE_LANGUAGE}`, () => {
        const language: Language = LANGUAGE_FR;

        action = Actions.changeLanguage(language);

        expectedState = {
            ...state,
            ui: {
                ...state.ui,
                language
            }
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`>> ${ActionType.CHANGE_SEND_KEY_MODE}`, () => {
        const sendKeyMode: SendKeyMode = SEND_KEY_MODE_CTRL_ENTER;

        action = Actions.changeSendKeyMode(sendKeyMode);

        expectedState = {
            ...state,
            ui: {
                ...state.ui,
                sendKeyMode
            }
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`>> ${ActionType.CHANGE_THEME}`, () => {
        const theme: Theme = THEME_DARK;

        action = Actions.changeTheme(theme);

        expectedState = {
            ...state,
            ui: {
                ...state.ui,
                theme
            }
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });

    it(`>> ${ActionType.NEW_MESSAGE}`, () => {
        const message: Message = {
            type: MESSAGE_TYPE_TEXT,
            clientId: '',
            userName: '',
            message: '',
            timestamp: 0,
        };

        action = Actions.newMessage(message);

        expectedState = {
            ...state,
            messages: [...state.messages, message]
        };

        expect(reducer(state, action)).toEqual(expectedState);
    });
});
