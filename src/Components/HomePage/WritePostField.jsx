import React, {useEffect, useRef, useState} from 'react';
import user from '../../images/user.jpg'
import {connect} from "react-redux";
import {createPost} from "../../Redux/actions/postsActions";

const WritePostsField = (props) => {

        const [title, setTitle] = useState('');
        const [openField, setOpenField] = useState(false);
        const [form, setForm] = useState( '');
        const areaRef = useRef();

        const submitHandler = (event) => {
            event.preventDefault()
            if (title.length < 1) {
                return
            }
            if (form.length < 1) {
                return
            }

            const newPost = {
                title, id: Date.now().toString(),
            }
            props.createPost(newPost)


        }
        const changeInputHandler = (event) => {
            event.preventDefault()
            event.persist()
            setTitle(prev => ({
                ...prev, ...{
                    [event.target.name]: event.target.value
                }
            }))
        }


        useEffect(() => {
            document.body.addEventListener('click', handleOutsideClick)

        }, []);


        const openFieldOnActive = () => {
            setOpenField(!openField)
        }

        const handleOutsideClick = (e) => {
            if (!e.path.includes(areaRef.current)) {
                setOpenField(false)
            }
        }

        function handleInput(e) {
            e.preventDefault()
            setForm(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));

        }


        return (
            <div className='WritePostField'>
                {!openField ?
                    <div className="WritePostFieldWrapper">
                        <img src={user} alt=''/>
                        {/*@ts-ignore*/}
                        <textarea
                            placeholder="What's new?"
                            onFocus={openFieldOnActive}

                        />
                        <div className="InputIconsWrapper">
                            <div className="InputIcons">
                                <svg fill="currentColor" height="16" width="16" viewBox="0 0 1920 1792">
                                    <path d="M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56
                         136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760
                          256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13
                           0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47
                            113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66
                             0 113 47t47 113z">
                                    </path>
                                </svg>
                            </div>

                            <div className="InputIcons">
                                <svg fill="currentColor" height="16" width="16" viewBox="0 0 1536 1792">
                                    <path d="M1536 224v1120q0 50-34 89t-86 60.5-103.5 32-96.5
                            10.5-96.5-10.5-103.5-32-86-60.5-34-89 34-89 86-60.5 103.5-32
                            96.5-10.5q105 0 192 39v-537l-768 237v709q0 50-34 89t-86 60.5-103.5
                            32-96.5 10.5-96.5-10.5-103.5-32-86-60.5-34-89 34-89 86-60.5 103.5-32
                            96.5-10.5q105 0 192 39v-967q0-31 19-56.5t49-35.5l832-256q12-4 28-4 40 0 68 28t28 68z">
                                    </path>
                                </svg>
                            </div>

                            <div className="InputIcons">
                                <svg fill="currentColor" height="16" width="16" viewBox="0 0 8 8">
                                    <path d="M.5 0c-.28 0-.5.23-.5.5v4c0 .28.23.5.5.5h5c.28 0
                            .5-.22.5-.5v-1.5l1 1h1v-3h-1l-1 1v-1.5c0-.28-.22-.5-.5-.5h-5z"
                                          transform="translate(0 1)">
                                    </path>
                                </svg>
                            </div>

                            <div className="InputIcons">
                                <svg fill="currentColor" height="16" width="16" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M15.5,11h-11C4.225,11,4,11.225,4,11.5v1C4,12.776,4.225,13,4.5,13h11
	c0.276,0,0.5-0.224,0.5-0.5v-1C16,11.225,15.776,11,15.5,11z M15.5,7h-11C4.225,7,4,7.225,4,7.5v1C4,8.776,4.225,9,4.5,9h11
	C15.776,9,16,8.776,16,8.5v-1C16,7.225,15.776,7,15.5,7z M10.5,15h-6C4.225,15,4,15.225,4,15.5v1C4,16.776,4.225,17,4.5,17h6
	c0.276,0,0.5-0.224,0.5-0.5v-1C11,15.225,10.776,15,10.5,15z M15.5,3h-11C4.225,3,4,3.225,4,3.5v1C4,4.776,4.225,5,4.5,5h11
	C15.776,5,16,4.776,16,4.5v-1C16,3.225,15.776,3,15.5,3z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    :
                    //@ts-ignore
                    <form onSubmit={submitHandler} ref={areaRef}>
                        <div className="WritePostFieldWrapper-Open">
                            <img src={user} alt=''/>
                            <input placeholder="What's new?"
                                   onChange={changeInputHandler}
                                   name='title'
                                   onInput={handleInput} value={form.title}
                                   autoFocus={true}
                            />
                            <div className='WritePostField__smile'>
                                <div className='WritePostField__smile-wrapper'>
                                    <svg fill="currentColor" height="20" width="20" viewBox="0 0 1536 1792">
                                        <path d="M1134 1075q-37 121-138 195t-228 74-228-74-138-195q-8-25
                                 4-48.5t38-31.5q25-8 48.5 4t31.5 38q25 80 92.5 129.5t151.5 49.5
                                 151.5-49.5 92.5-129.5q8-26 32-38t49-4 37 31.5 4 48.5zM640 640q0
                                  53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5
                                   90.5 37.5 37.5 90.5zM1152 640q0 53-37.5
                                    90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5
                                    37.5 90.5zM1408 896q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5
                                    51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51
                                    248.5-51 204-136.5 136.5-204 51-248.5zM1536 896q0 209-103 385.5t-279.5
                                    279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5
                                    385.5-103 385.5 103 279.5 279.5 103 385.5z">

                                        </path>
                                    </svg>
                                </div>
                            </div>

                        </div>
                        <div className="OpenInputFooter">
                            <div className="InputIconsWrapper">
                                <div className="InputIcons">
                                    <svg fill="currentColor" height="16" width="16" viewBox="0 0 1920 1792">
                                        <path d="M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56
                         136 56 56 136zM1664 960v448h-1408v-192l320-320 160 160 512-512zM1760
                          256h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13
                           0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zM1920 288v1216q0 66-47
                            113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66
                             0 113 47t47 113z">
                                        </path>
                                    </svg>
                                </div>

                                <div className="InputIcons">
                                    <svg fill="currentColor" height="16" width="16" viewBox="0 0 1536 1792">
                                        <path d="M1536 224v1120q0 50-34 89t-86 60.5-103.5 32-96.5
                            10.5-96.5-10.5-103.5-32-86-60.5-34-89 34-89 86-60.5 103.5-32
                            96.5-10.5q105 0 192 39v-537l-768 237v709q0 50-34 89t-86 60.5-103.5
                            32-96.5 10.5-96.5-10.5-103.5-32-86-60.5-34-89 34-89 86-60.5 103.5-32
                            96.5-10.5q105 0 192 39v-967q0-31 19-56.5t49-35.5l832-256q12-4 28-4 40 0 68 28t28 68z">
                                        </path>
                                    </svg>
                                </div>

                                <div className="InputIcons">
                                    <svg fill="currentColor" height="16" width="16" viewBox="0 0 8 8">
                                        <path d="M.5 0c-.28 0-.5.23-.5.5v4c0 .28.23.5.5.5h5c.28 0
                            .5-.22.5-.5v-1.5l1 1h1v-3h-1l-1 1v-1.5c0-.28-.22-.5-.5-.5h-5z"
                                              transform="translate(0 1)">
                                        </path>
                                    </svg>
                                </div>

                                <div className="InputIcons">
                                    <svg fill="currentColor" height="16" width="16" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M15.5,11h-11C4.225,11,4,11.225,4,11.5v1C4,12.776,4.225,13,4.5,13h11
	c0.276,0,0.5-0.224,0.5-0.5v-1C16,11.225,15.776,11,15.5,11z M15.5,7h-11C4.225,7,4,7.225,4,7.5v1C4,8.776,4.225,9,4.5,9h11
	C15.776,9,16,8.776,16,8.5v-1C16,7.225,15.776,7,15.5,7z M10.5,15h-6C4.225,15,4,15.225,4,15.5v1C4,16.776,4.225,17,4.5,17h6
	c0.276,0,0.5-0.224,0.5-0.5v-1C11,15.225,10.776,15,10.5,15z M15.5,3h-11C4.225,3,4,3.225,4,3.5v1C4,4.776,4.225,5,4.5,5h11
	C15.776,5,16,4.776,16,4.5v-1C16,3.225,15.776,3,15.5,3z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="OpenInputFooter__send-wrapper">
                                <div className="InputIcons">
                                    <svg fill="currentColor" height="16" width="16" viewBox="0 0 24 24">
                                        <path
                                            d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">

                                        </path>
                                    </svg>
                                </div>
                                <button type='submit' className='OpenInputFooter__button'>Send</button>
                            </div>
                        </div>
                    </form>
                }
            </div>
        );
    }
;

export default connect(null, {createPost})(WritePostsField);
