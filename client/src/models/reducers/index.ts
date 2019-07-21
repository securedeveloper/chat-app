import {ActionType, IAction} from "../actions/";
import {
    Language,
    LANGUAGE_EN,
    Message,
    SEND_KEY_MODE_ENTER, SendKeyMode,
    Store,
    Theme,
    THEME_DARK,
    TIME_FORMAT_12H,
    TimeFormat,
    UIProps
} from "../interfaces";
import {generateDummyMessages, generateDummyUserName} from "../../utils";
import {GENERATE_DUMMY_MESSAGES, GENERATE_DUMMY_MESSAGES_COUNTER} from "../../settings";

export const defaultUI: UIProps = {
    userName: generateDummyUserName(),
    timeFormat: TIME_FORMAT_12H,
    language: LANGUAGE_EN,
    theme: THEME_DARK,
    sendKeyMode: SEND_KEY_MODE_ENTER
};

export const defaultState: Store = {
    ui: {...defaultUI},
    messages: [],
    socket: undefined
};

if (GENERATE_DUMMY_MESSAGES) {
    generateDummyMessages(GENERATE_DUMMY_MESSAGES_COUNTER, defaultUI.userName).forEach((message: Message) => {
        defaultState.messages.push(message);
    });
}

export default (state = defaultState, action: IAction): Store => {
    switch (action.type) {
        case ActionType.SET_SOCKET: {
            const socket = action.payload as SocketIOClient.Socket;


            return {
                ...state,
                socket
            };
        }

        case ActionType.CHANGE_USER_NAME: {
            const messages = [...state.messages];
            const oldUserName = state.ui.userName;

            const userName = action.payload as string;

            messages.forEach(item => {
                if (item.userName === oldUserName) {
                    item.userName = userName
                }
            });

            return {
                ...state,
                ui: {
                    ...state.ui,
                    userName
                },
                messages
            };
        }

        case ActionType.NEW_MESSAGE: {
            const messages = [...state.messages];
            const newMessage = action.payload as Message;

            return {
                ...state,
                ui: {
                    ...state.ui,
                },
                messages: [
                    ...messages,
                    newMessage
                ]
            };
        }

        case ActionType.CHANGE_TIME_FORMAT: {
            const timeFormat = action.payload as TimeFormat;

            return {
                ...state,
                ui: {
                    ...state.ui,
                    timeFormat
                }
            };
        }

        case ActionType.CHANGE_LANGUAGE: {
            const language = action.payload as Language;

            return {
                ...state,
                ui: {
                    ...state.ui,
                    language
                }
            };
        }

        case ActionType.CHANGE_SEND_KEY_MODE: {
            const sendKeyMode = action.payload as SendKeyMode;

            return {
                ...state,
                ui: {
                    ...state.ui,
                    sendKeyMode
                }
            };
        }

        case ActionType.CHANGE_THEME: {
            const theme = action.payload as Theme;

            return {
                ...state,
                ui: {
                    ...state.ui,
                    theme
                }
            };
        }

        default:
            return state;
    }
};
