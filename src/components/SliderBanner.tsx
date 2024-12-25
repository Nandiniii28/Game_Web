import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Autoplay  } from 'swiper/modules';
export const SliderBanner: React.FC = () => {
    const images = [
        { id: 1, src: "./public/images/SL-11.jpg", alt: "Before Background" },
        { id: 2, src: "./public/images/SL-8.jpg", alt: "Slide 1" },
        { id: 3, src: "./public/images/SL-3.jpg", alt: "Slide 2" },
        { id: 4, src: "./public/images/SL-10.jpg", alt: "Slide 3" },
        { id: 5, src: "./public/images/SL-4.jpg", alt: "Slide 4" },
        { id: 6, src: "./public/images/SL-5.jpg", alt: "Nature 6" },
        { id: 7, src: "./public/images/SL-6.jpg", alt: "Nature 7" },
        { id: 8, src: "./public/images/SL-2.jpg", alt: "Nature 8" },
        { id: 9, src: "./public/images/SL-9.jpg", alt: "Nature 9" },
    ];
    return (
        <>
            <div className='main-swiper  py-5'>
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className="mySwiper"
                            initialSlide={2}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            
                            {images.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <img src={image.src} alt={image.alt} style={{ height: "inherit" }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>

        </>
    );
};