import React from "react";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import {translation} from "../../utils/translation";
import {ITEM_USER_NAME, Language} from "../../models/interfaces";
import {FormControl} from "react-bootstrap";


const InputUserName: React.FC<InputUserNameProps> = (props: InputUserNameProps) => {
    const {language, userName, handleUserNameChange} = props;

    return (
        <>
            <Col md={6} sm={12} className={'settings-input user-name'}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="input-username">
                            {translation[language][ITEM_USER_NAME]}
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="text"
                        value={userName}
                        onChange={handleUserNameChange}/>
                </InputGroup>
            </Col>
            <Col md={6} sm={12}/>
        </>
    );
};

export interface InputUserNameProps {
    language: Language;
    userName: string;
    handleUserNameChange: (event: any) => void
}

export default InputUserName;
