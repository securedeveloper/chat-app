import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import {ITEM_CHAT, ITEM_SETTINGS, ROUTE_HOME, ROUTE_SETTINGS} from "../models/interfaces";
import {getClassNames} from "../utils";
import {AppProps} from "../App";
import {translation} from "../utils/translation";

import "./Header.scss"

const Header: React.FC<AppProps> = (props: AppProps) => {
    const {language} = props;

    return (
        <Row className={getClassNames(`header`, props)}>
            <Col>
                <Navbar>
                    <Nav variant={`tabs`}>
                        <NavItem>
                            <LinkContainer exact to={ROUTE_HOME}>
                                <Nav.Link>
                                    {translation[language][ITEM_CHAT]}
                                    {' '}
                                    {(props.messages && props.messages.length) ?
                                        <Badge variant={`primary`}>{props.messages.length}</Badge> : null}
                                </Nav.Link>
                            </LinkContainer>
                        </NavItem>
                        <NavItem>
                            <LinkContainer exact to={ROUTE_SETTINGS}>
                                <Nav.Link>{translation[language][ITEM_SETTINGS]}</Nav.Link>
                            </LinkContainer>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    );
};

export default Header;
