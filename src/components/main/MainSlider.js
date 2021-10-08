import slider1 from './../../../src/assets/images/slide-fashion-01.webp'
import slider2 from './../../../src/assets/images/slide-fashion-02.webp'
import slider3 from './../../../src/assets/images/video-girl.mp4'

function MainSlider() {
    return (
        <div className="max-w-full">
            <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner h-40 md:h-500">
                    <div className="carousel-item active transition duration-500 ease-linear " data-bs-interval="4000">
                        <img className=" object-cover" src={slider2} alt="slider1" />
                    </div>
                    <div className="carousel-item transition duration-500 ease-linear " data-bs-interval="2000" >
                        <img className="object-cover" src={slider1} alt="slider2" />
                    </div>
                    <div className="carousel-item transition duration-500 ease-linear " data-bs-interval="10000">
                        <video className="object-cover" loop preload="auto" muted autoPlay>
                            <source src={slider3} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon colorArrow" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon colorArrow" aria-hidden="true"></span>
                </button>
            </div>
            
        </div>
    )
}

export default MainSlider
