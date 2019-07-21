import React from "react";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import {translation} from "../../utils/translation";
import {
    AVAILABLE_THEMES,
    ITEM_THEME,
    Language, Theme,
} from "../../models/interfaces";
import {Dropdown, DropdownButton, FormControl} from "react-bootstrap";


const InputTheme: React.FC<InputThemeProps> = (props: InputThemeProps) => {
    const {language, theme, handleThemeChange} = props;


    const renderThemeSelectionItem = (theme: Theme, index: number) => {
        const {language} = props;

        return (
            <Dropdown.Item key={index} href="#" onClick={() => handleThemeChange(theme)}>
                {translation[language][theme]}
            </Dropdown.Item>
        );
    };

    return (
        <>
            <Col md={6} sm={12} className={'settings-input theme'}>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={translation[language][ITEM_THEME]}
                        id="input-group-dropdown-1"
                        block="true">
                        {AVAILABLE_THEMES.map(renderThemeSelectionItem)}
                    </DropdownButton>
                    <FormControl
                        type="text"
                        value={translation[language][theme]}
                        disabled={true}/>
                </InputGroup>
            </Col>
            <Col md={6}/>
        </>
    );
};

export interface InputThemeProps {
    language: Language;
    theme: Theme;
    handleThemeChange: (theme: Theme) => void
}

export default InputTheme;
