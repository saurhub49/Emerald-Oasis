import image1 from '../../images/welcome2.jpg'
import image2 from '../../images/welcome1.jpg'
import image3 from '../../images/welcome3.jpg'
import './welcomeCarousel.css'
const WelcomeCarousel = () => {
    return <div>

        <div className="back-div">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src={image1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src={image2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src={image3} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default WelcomeCarousel