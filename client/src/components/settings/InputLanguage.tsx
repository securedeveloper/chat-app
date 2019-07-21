import React from "react";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import {translation} from "../../utils/translation";
import {
    AVAILABLE_LANGUAGES,
    ITEM_LANGUAGE,
    Language,
} from "../../models/interfaces";
import {Dropdown, DropdownButton, FormControl} from "react-bootstrap";


const InputLanguage: React.FC<InputLanguageProps> = (props: InputLanguageProps) => {
    const {language, handleLanguageChange} = props;


    const renderLanguageSelectionItem = (language: Language, index: number) => {
        const {language: selectedLanguage} = props;

        return (
            <Dropdown.Item key={index} href="#" onClick={() => handleLanguageChange(language)}>
                {translation[selectedLanguage][language]}
            </Dropdown.Item>
        );
    };

    return (
        <>
            <Col md={6} sm={12} className={'settings-input language'}>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={translation[language][ITEM_LANGUAGE]}
                        id="input-group-dropdown-1"
                        block="true">
                        {AVAILABLE_LANGUAGES.map(renderLanguageSelectionItem)}
                    </DropdownButton>
                    <FormControl
                        type="text"
                        value={translation[language][language]}
                        disabled={true}/>
                </InputGroup>
            </Col>
            <Col md={6}/>
        </>
    );
};

export interface InputLanguageProps {
    language: Language;
    handleLanguageChange: (language: Language) => void
}

export default InputLanguage;
