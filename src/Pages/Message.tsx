import React from 'react';
import socketReducer from "../Redux/reducers/socketReducer";
import socket from "../socket";
import axios from "axios";
import JoinBlock from "../Components/MessagePage/JoinBlock";
import Chat from "../Components/MessagePage/Chat";

const MessagePage = () => {
    const [state, dispatch] = React.useReducer(socketReducer, {
        joined: false,
        roomId: 1,
        userName: null,
        users: [],
        messages: [],
    });
    const onLogin = async (obj:any) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
        });
        socket.emit('ROOM:JOIN', obj);
        const { data } = await axios.get(`/rooms/${obj.roomId}`);
        dispatch({
            type: 'SET_DATA',
            payload: data,
        });
    };
    const setUsers = (users:any) => {
        dispatch({
            type: 'SET_USERS',
            payload: users,
        });
    };

    const addMessage = (message:any) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message,
        });
    };

    React.useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers);
        socket.on('ROOM:NEW_MESSAGE', addMessage);
    }, []);

    //@ts-ignore
    window.socket = socket;


    return (
        <div className="message">
                <JoinBlock onLogin={onLogin}  />
                <Chat {...state} onAddMessage={addMessage} />
        </div>
    );
};

export default MessagePage;
