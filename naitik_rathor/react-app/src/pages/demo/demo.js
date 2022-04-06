
const Demo = () => {

    return <div>
        {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    <img src="https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg" class="d-block w-50" alt="..."></img>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    <img src="https://cdn.wallpapersafari.com/11/27/ax8eXs.jpg" class="d-block w-50" alt="..."></img>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    <img src="https://cdn.osxdaily.com/wp-content/uploads/2021/06/windows-11-wallpaper-23-scaled.jpg" class="d-block w-50" alt="..."></img>
                </div>
            </div>
        </div> */}

        {/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src="https://cdn.wallpapersafari.com/11/27/ax8eXs.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src="https://cdn.osxdaily.com/wp-content/uploads/2021/06/windows-11-wallpaper-23-scaled.jpg" class="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> */}

        {/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.wallpapersafari.com/11/27/ax8eXs.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.osxdaily.com/wp-content/uploads/2021/06/windows-11-wallpaper-23-scaled.jpg" class="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> */}

        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg" class="d-block w-100" alt="..."></img>
                    {/* <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://cdn.wallpapersafari.com/11/27/ax8eXs.jpg" class="d-block w-100" alt="..."></img>
                    {/* <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div> */}
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.osxdaily.com/wp-content/uploads/2021/06/windows-11-wallpaper-23-scaled.jpg" class="d-block w-100" alt="..."></img>
                    {/* <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div> */}
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
}

export default Demo