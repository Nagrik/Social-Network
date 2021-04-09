import React from "react";
import user from '../../images/user.jpg'
import ReactModal from "react-modal";

const imgUrls = [
    'https://source.unsplash.com/PC_lbSSxCZE/800x600',
    'https://source.unsplash.com/lVmR1YaBGG4/800x600',
    'https://source.unsplash.com/5KvPQc1Uklk/800x600',
    'https://source.unsplash.com/GtYFwFrFbMA/800x600'
];

export default class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {currentIndex: null};
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.renderImageContent = this.renderImageContent.bind(this);
    }

    renderImageContent(src, index) {
        return (
            <div onClick={(e) => this.openModal(e, index)} key={Math.random()}>
                <img src={src} key={src} alt=''/>
            </div>
        )
    }
    openModal(e, index) {
        this.setState ({ currentIndex: index });
    }
    closeModal(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState ({ currentIndex: null });
    }
    findPrev(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState(({currentIndex}) => ({
            currentIndex: currentIndex -1
        }));
    }
    findNext(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState(({currentIndex}) => ({
            currentIndex: currentIndex + 1
        }));
    }
    render() {
        return (
            <div className="gallery-container">
                <div className="gallery-grid">
                    {imgUrls.map(this.renderImageContent)}
                </div>
                <GalleryModal
                    //@ts-ignore
                    closeModal={this.closeModal}
                    findPrev={this.findPrev}
                    findNext={this.findNext}
                    hasPrev={this.state.currentIndex > 0}
                    hasNext={this.state.currentIndex + 1 < imgUrls.length}
                    src={imgUrls[this.state.currentIndex]}
                />
            </div>
        )
    }
}

class GalleryModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(e) {
        if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev)
            this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    render () {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
        if (!src) {
            return null;
        }
        return (

            <ReactModal
                isOpen={!!src}
                contentLabel="onRequestClose Example"
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
            >


                <div className="Modal__photoWrapper">
                    {hasPrev && <a href="/" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                    {hasNext && <a href="/" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                    <img src={src} alt=''/>
                    <div className="Modal__underPhoto">
                        <span>2020 - 2021</span>
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
                <div className='Modal__close' onClick={closeModal}>&#10008;</div>
            </ReactModal>
        )
    }
}

