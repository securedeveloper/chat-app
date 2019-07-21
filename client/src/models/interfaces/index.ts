/**
 * Project Constants
 */
export const ROUTE_HOME: string = "/";
export const ROUTE_SETTINGS: string = "/settings";

export const DARKER_COLOR: string = "#111111";
export const DARK_COLOR: string = "#282c34";
export const LIGHT_COLOR: string = "#d8d4cb";
export const LIGHTER_COLOR: string = "#EEEEEE";

export const ITEM_CHAT: string = "ITEM_CHAT";
export const ITEM_SETTINGS: string = "ITEM_SETTINGS";
export const ITEM_MESSAGE_TYPE: string = "ITEM_MESSAGE_TYPE";
export const ITEM_USER_NAME: string = "ITEM_USER_NAME";
export const ITEM_TIME_FORMAT: string = "ITEM_TIME_FORMAT";
export const ITEM_LANGUAGE: string = "ITEM_LANGUAGE";
export const ITEM_THEME: string = "ITEM_THEME";
export const ITEM_SEND_KEY_MODE: string = "ITEM_SEND_KEY_MODE";

/**
 * UI Theme Definition and constant values
 * **/
export type Theme = "dark" | "light";
export const THEME_DARK: Theme = "dark";
export const THEME_LIGHT: Theme = "light";
export const AVAILABLE_THEMES: Theme[] = [THEME_DARK, THEME_LIGHT];


/**
 * UI Time Format Definition and constant values
 * **/
export type TimeFormat = "12h" | "24h";
export const TIME_FORMAT_12H: TimeFormat = "12h";
export const TIME_FORMAT_24H: TimeFormat = "24h";
export const AVAILABLE_TIME_FORMATS: TimeFormat[] = [TIME_FORMAT_12H, TIME_FORMAT_24H];


/**
 * UI Language Definition and constant values
 * **/
export type Language = "en" | "de" | "fr"
export const LANGUAGE_EN: Language = "en";
export const LANGUAGE_DE: Language = "de";
export const LANGUAGE_FR: Language = "fr";
export const AVAILABLE_LANGUAGES: Language[] = [LANGUAGE_EN, LANGUAGE_DE, LANGUAGE_FR];

/**
 * Message send key mode
 */
export type SendKeyMode = "enter" | "ctrlEnter";
export const SEND_KEY_MODE_ENTER: SendKeyMode = "enter";
export const SEND_KEY_MODE_CTRL_ENTER: SendKeyMode = "ctrlEnter";
export const AVAILABLE_SEND_KEY_MODES: SendKeyMode[] = [
    SEND_KEY_MODE_ENTER,
    SEND_KEY_MODE_CTRL_ENTER,
];

/**
 * Interface to hold UI values
 * **/
export interface UIProps {
    userName: string;
    theme: Theme;
    timeFormat: TimeFormat;
    language: Language;
    sendKeyMode: SendKeyMode;
}


/**
 * Interface to hold Message Input Data
 */
export type MessageType = "Text" | "Video" | "Audio" | "Url" | "Image";
export const MESSAGE_TYPE_TEXT: MessageType = "Text";
export const MESSAGE_TYPE_VIDEO: MessageType = "Video";
export const MESSAGE_TYPE_AUDIO: MessageType = "Audio";
export const MESSAGE_TYPE_URL: MessageType = "Url";
export const MESSAGE_TYPE_IMAGE: MessageType = "Image";

export const AVAILABLE_MESSAGE_TYPES: MessageType[] = [
    MESSAGE_TYPE_TEXT,
    MESSAGE_TYPE_VIDEO,
    MESSAGE_TYPE_AUDIO,
    MESSAGE_TYPE_URL,
    MESSAGE_TYPE_IMAGE
];

/**
 * Message
 */
export interface Message {
    clientId: string;
    userName: string;
    type: string;
    message: string;
    timestamp: number;
}

/**
 * Message Modes
 */

export type MessageMode = "sent" | "received";
export const MESSAGE_MODE_SENT: MessageMode = "sent";
export const MESSAGE_MODE_RECEIVED: MessageMode = "received";

/**
 * Events to handle messages with server
 */

export interface ConnectionManager {
    onConnected: (socket: SocketIOClient.Socket) => void;
    onDisconnected: (socket: SocketIOClient.Socket) => void;
    onMessage: (message: Message) => void;
    onError: (error: Error) => void;
}

/**
 * Interface to hold Store data
 * **/
export interface Store {
    ui: UIProps;
    messages: Message[],
    socket?: SocketIOClient.Socket
}
