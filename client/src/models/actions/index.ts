import {Language, Message, SendKeyMode, Theme, TimeFormat} from "../interfaces";
import {Action} from "redux";

type Payload = string | number | boolean | Theme | Message | SocketIOClient.Socket | SendKeyMode;

export interface IAction extends Action {
    payload: Payload;
}

export enum ActionType {
    CHANGE_USER_NAME = "CHANGE_USER_NAME",
    CHANGE_TIME_FORMAT = "CHANGE_TIME_FORMAT",
    CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
    CHANGE_THEME = "CHANGE_THEME",
    NEW_MESSAGE = "NEW_MESSAGE",
    CHANGE_SEND_KEY_MODE = "CHANGE_SEND_KEY_MODE",
    SET_SOCKET = "SET_SOCKET",
}

// actions
const changeUserName = (newUserName: string): IAction => ({
    type: ActionType.CHANGE_USER_NAME,
    payload: newUserName
});

const changeTimeFormat = (newFormat: TimeFormat): IAction => ({
    type: ActionType.CHANGE_TIME_FORMAT,
    payload: newFormat
});

const changeLanguage = (newLanguage: Language): IAction => ({
    type: ActionType.CHANGE_LANGUAGE,
    payload: newLanguage
});

const changeSendKeyMode = (newMode: SendKeyMode): IAction => ({
    type: ActionType.CHANGE_SEND_KEY_MODE,
    payload: newMode
});

const changeTheme = (newTheme: Theme): IAction => ({
    type: ActionType.CHANGE_THEME,
    payload: newTheme
});

const setSocket = (newSocket: SocketIOClient.Socket): IAction => ({
    type: ActionType.SET_SOCKET,
    payload: newSocket
});

const newMessage = (newMessage: Message): IAction => ({
    type: ActionType.NEW_MESSAGE,
    payload: newMessage
});

export default {
    changeUserName,
    changeTimeFormat,
    changeLanguage,
    changeTheme,
    setSocket,
    changeSendKeyMode,
    newMessage
};
