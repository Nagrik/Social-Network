import "react-slideshow-image/dist/styles.css";
import Gallery from "./Slides";


const UserPhotos = () => {

    return (
        <div className='UserPhotos'>
                <div className="UserPhotos__title">
                    <span>My photos</span>
                    <a href='/'>Show on the map</a>
                </div>
                <div className="UserPhotos__wrapper">
                    <div className='UserPhoto-photo'>
                       <Gallery/>
                    </div>
                </div>
            </div>
    );
};

export default UserPhotos;
