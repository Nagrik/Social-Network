import React from 'react';
import axios from 'axios';
import user from '../../images/user.jpg'

function JoinBlock({ onLogin }:any) {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [ , setLoading] = React.useState(false);
    const [active, setActive] = React.useState(false);



    const  switchActiveMessage = async () => {
        await onEnter()
        setRoomId('1')
        setUserName('Roman')
        setActive(!active)
    }
    const onEnter = async () => {

        const obj = {
            roomId,
            userName,
        };
        setLoading(true);
        await axios.post('/rooms', obj);
        onLogin(obj);
    };


    return (
        <div className="message__wrapper" >
            <div onClick={switchActiveMessage} className={active ? "message__rooms-active" : "message__rooms"}   >
                <div className="message__room">
                    <div className="message__room-photo">
                        <img src={user} alt='Me'/>
                    </div>
                    <div className="message__room-userWrapper">
                        <div className="message__room-user">Saved Message</div>
                        <p>Message</p>
                    </div>
                </div>
            </div>

            {/*<div className="message">*/}
            {/*    /!*@ts-ignore*!/*/}
            {/*</div>*/}
        </div>
    );
}

export default JoinBlock;
