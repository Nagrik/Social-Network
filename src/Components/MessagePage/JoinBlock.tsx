import React from 'react';
import axios from 'axios';
import user from '../../images/user.jpg'
import Chat from "./Chat";

function JoinBlock({ onLogin }:any) {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);
    const [active, setActive] = React.useState(false);

    const onEnter = async () => {

        const obj = {
            roomId,
            userName,
        };
        setLoading(true);
        await axios.post('/rooms', obj);
        onLogin(obj);
    };

    const switchActiveMessage = () => {
        setActive(!active)
        onEnter()
        setRoomId('1')
        setUserName('Roman')
    }

    return (
        <div className="message__wrapper" >
            <div className={active ? "message__rooms-active" : "message__rooms"} onClick={switchActiveMessage}  >
                <div className="message__room">
                    <div className="message__room-photo">
                        <img src={user} alt='Me'/>
                    </div>
                    <div className="message__room-userWrapper">
                        <div className="message__room-user">Me</div>
                        <p>Message</p>
                    </div>
                </div>
            </div>

            <div className="message">
                {/*@ts-ignore*/}
            </div>
        </div>
    );
}

export default JoinBlock;
