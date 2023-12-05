
import welcome1 from '../../images/welcome1.jpg'
import welcome2 from '../../images/welcome1.jpg'
import welcome3 from '../../images/welcome3.jpg'
import './welcomeCarousel.css'
const WelcomeCarousel = () => {
    return <div>

        <div className="back-div">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src={welcome1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src={welcome2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src={welcome3} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default WelcomeCarousel