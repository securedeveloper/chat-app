import React from "react";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import {translation} from "../../utils/translation";
import {AVAILABLE_TIME_FORMATS, ITEM_TIME_FORMAT, Language, TimeFormat} from "../../models/interfaces";
import {Dropdown, DropdownButton, FormControl} from "react-bootstrap";


const InputTimeFormat: React.FC<InputTimeFormatProps> = (props: InputTimeFormatProps) => {
    const {language, timeFormat, handleTimeFormatChange} = props;


    const renderTimeFormatSelectionItem = (timeFormat: TimeFormat, index: number) => {
        return (
            <Dropdown.Item key={index} href="#" onClick={() => handleTimeFormatChange(timeFormat)}>
                {timeFormat}
            </Dropdown.Item>
        );
    };

    return (
        <>
            <Col md={6} sm={12} className={'settings-input time-format'}>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={translation[language][ITEM_TIME_FORMAT]}
                        id="input-group-dropdown-1"
                        block="true">
                        {AVAILABLE_TIME_FORMATS.map(renderTimeFormatSelectionItem)}
                    </DropdownButton>
                    <FormControl
                        type="text"
                        value={timeFormat}
                        disabled={true}/>
                </InputGroup>
            </Col>
            <Col md={6}/>
        </>
    );
};

export interface InputTimeFormatProps {
    language: Language;
    timeFormat: string;
    handleTimeFormatChange: (timeFormat: TimeFormat) => void
}

export default InputTimeFormat;
