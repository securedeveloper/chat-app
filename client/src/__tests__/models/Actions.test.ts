import Actions, {ActionType} from "../../models/actions"
import {
    Language,
    LANGUAGE_FR,
    Message,
    MESSAGE_TYPE_TEXT, SEND_KEY_MODE_CTRL_ENTER, SendKeyMode,
    Theme,
    THEME_DARK,
    TIME_FORMAT_24H,
    TimeFormat
} from "../../models/interfaces";

describe(">> Actions", () => {
    it(" >> changeUserName", () => {
        const newUserName: string = 'user101';

        expect(Actions.changeUserName(newUserName)).toEqual({
            type: ActionType.CHANGE_USER_NAME,
            payload: newUserName
        });
    });

    it(" >> changeTimeFormat", () => {
        const timeFormat: TimeFormat = TIME_FORMAT_24H;

        expect(Actions.changeTimeFormat(timeFormat)).toEqual({
            type: ActionType.CHANGE_TIME_FORMAT,
            payload: timeFormat
        });
    });

    it(" >> changeLanguage", () => {
        const language: Language = LANGUAGE_FR;

        expect(Actions.changeLanguage(language)).toEqual({
            type: ActionType.CHANGE_LANGUAGE,
            payload: language
        });
    });

    it(" >> changeSendKeyMode", () => {
        const sendKeyMode: SendKeyMode = SEND_KEY_MODE_CTRL_ENTER;
        expect(Actions.changeSendKeyMode(sendKeyMode)).toEqual({
            type: ActionType.CHANGE_SEND_KEY_MODE,
            payload: sendKeyMode
        });
    });

    it(" >> changeTheme", () => {
        const theme: Theme = THEME_DARK;
        expect(Actions.changeTheme(theme)).toEqual({
            type: ActionType.CHANGE_THEME,
            payload: theme
        });
    });

    it(" >> newMessage", () => {
        const message: Message = {
            type: MESSAGE_TYPE_TEXT,
            clientId: '',
            userName: '',
            message: '',
            timestamp: 0,
        };

        expect(Actions.newMessage(message)).toEqual({
            type: ActionType.NEW_MESSAGE,
            payload: message
        });
    });
});
