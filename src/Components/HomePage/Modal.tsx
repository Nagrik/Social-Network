import React, {useState} from "react";
import ReactModal from 'react-modal'
import user from '../../images/user.jpg'

export const Modal = () => {

    const [showModal, setShowModal] = useState(false);


    const handleOpenModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Trigger Modal</button>
            <ReactModal
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
            >

                <div className="Modal__photoWrapper">
                    <img alt=''/>
                    <div className="Modal__underPhoto">
                        <span>2020 - 2021</span>
                        <span>1 of 5</span>
                        <span>Share</span>
                        <span>Tag photo</span>
                        <span>Remove</span>
                    </div>
                </div>
                <div className="Modal__photoInfo">
                    <div className="Modal__photoInfo-wrapper">
                        <div className="Modal__photoInfo-user">
                            <img src={user} alt=''/>
                        <div className="Modal__photoInfo-name">
                            <a href='/'>Roman Nahryshko</a>
                            <div className="Modal__photoInfo-date">
                                2 March in 19:18
                            </div>
                        </div>
                        </div>
                        <div className="Modal__feedback">
                            <div className="heart">
                                <svg fill="currentColor" height="20" width="20" viewBox="0 0 1792 1792">
                                    <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220
                             127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224
                             0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z">
                                    </path></svg>
                            </div>
                            <div className="share">
                                <svg fill="currentColor" height="20" width="20" viewBox="0 0 1792 1792">
                                    <path d="M1792 640q0 26-19 45l-512 512q-19 19-45 19t-45-19-19-45v-256h-224q-98 0-175.5
                                     6t-154 21.5-133 42.5-105.5 69.5-80 101-48.5 138.5-17.5 181q0 55 5 123 0 6 2.5 23.5t2.5
                                     26.5q0 15-8.5 25t-23.5 10q-16 0-28-17-7-9-13-22t-13.5-30-10.5-24q-127-285-127-451 0-199
                                      53-333 162-403 875-403h224v-256q0-26 19-45t45-19 45 19l512 512q19 19 19 45z">

                                </path></svg>
                            </div>
                        </div>
                        <div className="void"/>
                        <div className="Modal__comment">
                            <div className="Modal__comment-wrapper">
                                    <img src={user} alt=''/>
                                <input placeholder='Write a comment...'/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='Modal__close' onClick={handleCloseModal}>&#10008;</div>
            </ReactModal>
        </div>
    );
}


