import {
    DARKER_COLOR,
    LIGHTER_COLOR, MESSAGE_TYPE_TEXT,
    Theme,
    THEME_DARK,
    THEME_LIGHT,
    TIME_FORMAT_24H,
    TimeFormat,
    UIProps
} from "../models/interfaces";

export const getClassNames = (staticClass: string, props: UIProps): string => {
    const {theme} = props;

    return [staticClass, theme].join(' ');
};

export const generateDummyUserName = () => {
    return `user${Math.round(Math.random() * 100000)}`;
};

export const getContrast = (type: Theme): Theme => {
    return type === THEME_DARK ? THEME_LIGHT : THEME_DARK;
};

export const getContrastColor = (type: Theme): string => {
    return type === THEME_DARK ? LIGHTER_COLOR : DARKER_COLOR;
};

export const getFormattedTime = (ticks: number, format: TimeFormat): string => {
    const newDate = new Date(ticks);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    if (format === TIME_FORMAT_24H) {
        return `${formattedTime(hours)}:${formattedTime(minutes)}`;
    }

    const hrs = hours > 12 ? hours - 12 : hours;
    const AM_PM = hours < 12 ? 'AM' : 'PM';

    return `${formattedTime(hrs)}:${formattedTime(minutes)} ${AM_PM}`;
};

const formattedTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
};

export const generateDummyMessages = (count: number, userName: string) => {
    const messages = [];

    for (let i = 0; i < count; i++) {
        messages.push({
            type: MESSAGE_TYPE_TEXT,
            clientId: '',
            userName: i % 2 === 0 ? userName : `${userName}1`,
            timestamp: Date.now(),
            message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        });
    }

    return messages;
};
