import VideoLoading from '../../video/animationCity.mp4'
import LoginModal from '../loginModal/loginModal'

const BackgroundVideo = (props: any) => {


    return (
        <div style={{ width: "100%", height: "70vh", overflow: "hidden" }}>
            <video autoPlay loop muted width="100%" height="100%" style={{ objectFit: "cover" }}>
                <source src={VideoLoading} type='video/mp4' />
            </video>
        </div>
        
    )
}

export default BackgroundVideo