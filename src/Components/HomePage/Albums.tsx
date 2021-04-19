import React, {useEffect,  useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setLoadedPhoto, setPhotos} from "../../Redux/actions/modalAlbums";
import {Modal} from 'antd';
import Loader from "../../Tools/Loader";


const ModalAlbums = () => {
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const selectPhoto = ({album}:any) => album.photos
    const photo = useSelector(selectPhoto)
    const selectLoad = ({album}:any) => album.isLoadedPhotos
    const isLoaded = useSelector(selectLoad)

    useEffect(() => {
        dispatch(setLoadedPhoto(false))
        axios.get('https://social-network-31abc-default-rtdb.firebaseio.com/albumsImages.json').then(({data}) => {
            dispatch(setPhotos(data))
        })
    }, []);


    return (
        <>
            <div onClick={showModal} className='Albums__photo'>
                <img alt='' src='https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg'/>
                <div className="Albums__photo-subtitle">
                    <span>My best photo</span>
                    <span>10</span>
                </div>
            </div>
            <div onClick={showModal} className='Albums__photo'>
                <img alt='' src='https://www.planetware.com/wpimages/2019/09/south-africa-in-pictures-most-beautiful-places-to-visit-kruger-national-park.jpg'/>
                <div className="Albums__photo-subtitle">
                    <span>My best photo</span>
                    <span>10</span>
                </div>
            </div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="modal-header">
                    <a href='/'>Roman Nahryshko</a>
                    <span>2020-2021</span>
                </div>
                <div className='Albums__photo-modal-wrapper'>
                    <div className="Albums__photo-modal">
                        {isLoaded ? photo.map((obj: object) => (
                                //@ts-ignore
                                <img src={obj} alt=''/>))
                            : Array(6).fill(0).map((_, index) => (
                                <Loader key={index}/>))}
                    </div>
                </div>
            </Modal>
        </>
    );
};
const Albums = () => {
    return (

        <div className='Albums'>
            <div className='Albums__title'>
                <div className='Albums__title-text'>
                    Photo albums
                    <p className='Albums__title-subtext'>2</p>
                </div>
            </div>
            <ModalAlbums/>
        </div>
    );
};

export default Albums;



