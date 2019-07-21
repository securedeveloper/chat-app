import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import {
    Language, SendKeyMode,
    Store,
    Theme,
    TimeFormat,
    UIProps
} from "../../models/interfaces";
import {getClassNames} from "../../utils";
import Actions from "../../models/actions";

import InputUserName from "./InputUserName";
import InputTimeFormat from "./InputTimeFormat";
import InputLanguage from "./InputLanguage";
import InputTheme from "./InputTheme";
import InputSendKeyMode from "./InputSendKeyMode";

import "./Settings.scss";

class Settings extends React.Component<SettingsProps> {
    public render(): React.ReactElement<SettingsProps> {
        const {language, timeFormat, userName, theme, sendKeyMode} = this.props;

        return (
            <Row className={getClassNames(`settings`, this.props)}>
                {/*User Name */}
                <InputUserName
                    language={language}
                    userName={userName}
                    handleUserNameChange={this.handleUserNameChange}/>

                {/*Time Format */}
                <InputTimeFormat
                    language={language}
                    timeFormat={timeFormat}
                    handleTimeFormatChange={this.handleTimeFormatChange}/>

                {/*Language */}
                <InputLanguage
                    language={language}
                    handleLanguageChange={this.handleLanguageChange}/>

                {/*Theme */}
                <InputTheme
                    language={language}
                    theme={theme}
                    handleThemeChange={this.handleThemeChange}/>

                {/*Send Key Mode */}
                <InputSendKeyMode
                    language={language}
                    sendKeyMode={sendKeyMode}
                    handleSendKeyModeChange={this.handleSendKeyModeChange}/>
            </Row>
        );
    }

    private handleUserNameChange = (event: any): void => {
        const {changeUserName} = this.props;

        changeUserName(event.target.value);
    };

    private handleTimeFormatChange = (timeFormat: TimeFormat): void => {
        const {changeTimeFormat} = this.props;

        changeTimeFormat(timeFormat);
    };

    private handleLanguageChange = (language: Language): void => {
        const {changeLanguage} = this.props;

        changeLanguage(language);
    };

    private handleThemeChange = (theme: Theme): void => {
        const {changeTheme} = this.props;

        changeTheme(theme);
    };

    private handleSendKeyModeChange = (sendKeyMode: SendKeyMode): void => {
        const {changeSendKeyMode} = this.props;

        changeSendKeyMode(sendKeyMode);
    };
}

export interface SettingsProps extends UIProps {
    changeUserName: (newUserName: string) => Dispatch;
    changeTimeFormat: (newFormat: TimeFormat) => Dispatch;
    changeLanguage: (newLanguage: Language) => Dispatch;
    changeTheme: (newTheme: Theme) => Dispatch;
    changeSendKeyMode: (newMode: SendKeyMode) => Dispatch;
}

const mapStateToProps = (store: Store, props: SettingsProps) => ({
    ...props,
    ...store.ui,
});

const mapDispatchToProps = (dispatch: Dispatch, props: SettingsProps) => ({
    ...props,
    changeUserName: (newUserName: string) => dispatch(Actions.changeUserName(newUserName)),
    changeTimeFormat: (newFormat: TimeFormat) => dispatch(Actions.changeTimeFormat(newFormat)),
    changeLanguage: (newLanguage: Language) => dispatch(Actions.changeLanguage(newLanguage)),
    changeTheme: (newTheme: Theme) => dispatch(Actions.changeTheme(newTheme)),
    changeSendKeyMode: (newMode: SendKeyMode) => dispatch(Actions.changeSendKeyMode(newMode))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
