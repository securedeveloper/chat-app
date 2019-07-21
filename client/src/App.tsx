import React from 'react';
import Container from "react-bootstrap/Container";
import {connect} from 'react-redux';
import {Switch, Route, Router} from 'react-router-dom';
import {createBrowserHistory, History} from 'history';
import {Dispatch} from "redux";

import Header from "./components/Header";
import Chat from "./components/chat";
import Settings from "./components/settings";
import socketIOClient from "socket.io-client";
import Toast from "react-bootstrap/Toast";
import {
    Store,
    UIProps,
    ROUTE_HOME,
    ROUTE_SETTINGS,
    Message,
    TIME_FORMAT_12H
} from "./models/interfaces";
import {SERVER_URL} from "./settings";
import Actions from "./models/actions";
import {getClassNames, getFormattedTime} from "./utils";

import './App.scss';

const history: History = createBrowserHistory();

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            socketClient: socketIOClient(SERVER_URL)
        };
    }

    public componentDidMount() {
        const {socketClient} = this.state;

        this.onConnected(socketClient);

        socketClient.on("message", this.onMessage);

        socketClient.on("disconnect", this.onDisconnected);

        socketClient.on("error", this.onError);
    }

    public onConnected = (socket: SocketIOClient.Socket) => {
        const {socketClient} = this.state;
        const {setSocket} = this.props;

        if (socketClient && setSocket) {
            setSocket(socket);
        }

        this.showToast("Connected", "Client has been connected with the server");
    };

    public onDisconnected = (socket: SocketIOClient.Socket) => {
        this.showToast("Disconnected", "Client has been disconnected with the server");
    };

    public onMessage = (message: Message) => {
        const {userName, newMessage} = this.props;

        if (message.userName === userName) {
            this.showToast("New Message", message.message);
        }

        if (newMessage) {
            newMessage(message);
        }
    };

    public onError = (error: Error) => {
        this.showToast("Error", error.message);
    };

    private showToast = (title: string, message: string) => {
        return (
            <Toast show={true} autohide={true} transition={true}>
                <Toast.Header>
                    <strong className="mr-auto">{title}</strong>
                    <small>{getFormattedTime(Date.now(), TIME_FORMAT_12H)}</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        );
    };

    public render(): React.ReactElement<AppProps> {
        return (
            <Container className={getClassNames('app', this.props)}>
                <Router history={history}>
                    <>
                        <Header {...this.props}/>
                        <Switch>
                            <Route exact path={ROUTE_HOME} component={Chat}/>
                            <Route path={ROUTE_SETTINGS} component={Settings}/>
                        </Switch>
                    </>
                </Router>
            </Container>
        );
    }
}

interface AppState {
    socketClient: SocketIOClient.Socket;
}

export interface AppProps extends UIProps {
    messages?: Message[];
    setSocket?: (newSocket: SocketIOClient.Socket) => Dispatch;
    newMessage?: (message: Message) => Dispatch;
}

const mapStateToProps = (store: Store, props: AppProps): AppProps => ({
    ...props,
    ...store.ui,
    messages: store.messages,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setSocket: (socket: SocketIOClient.Socket) => dispatch(Actions.setSocket(socket)),
    newMessage: (message: Message) => dispatch(Actions.newMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
