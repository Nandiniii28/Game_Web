import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';
export const Testimonials: React.FC = () => {

    return (
        <>
            <div className='testimonials-section border-bottom border-top py-5'>

                <div className="row g-0">
                    <div className="col-md-12 px-3">
                        <div className="heading text-center">
                            <h2 className="h2 mb-2">What Our Players Say</h2>
                            <p className="text-muted">Discover the joy of online gaming with our user-generated content</p>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-md-12 px-5">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>John Lewis</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>John Lewis</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>John Lewis</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>John Lewis</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>John Lewis</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>John Lewis</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>John Lewis</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>
                            <SwiperSlide className='testimonial-swiper'>
                                <div className="swiper-content">
                                    <div className="rating-icon">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <div className="user-comment">
                                        <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore.</p>
                                    </div>
                                    <div className="comment-author">
                                        <div className="author-name">
                                            <p>John Lewis</p>
                                        </div>
                                        <div className="author-title">
                                            <p>Player</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 px-2">
                        <div className="row our-success">
                            <div className="col-md-3 col-sm-6 mb-4 Px-3">
                                <h4>Categories</h4>
                                <p>10+</p>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 Px-3">
                                <h4>Slots</h4>
                                <p>2548</p>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 Px-3">
                                <h4>Games</h4>
                                <p>3</p>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4 Px-3">
                                <h4>Tournaments</h4>
                                <p>256</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
