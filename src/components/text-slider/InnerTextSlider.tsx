"use client"
import { brandMarqueeSwiperParams } from '@/constants/swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const slideTexts = [
    "VOUS AVEZ UN GRAND PROJET ?",
    "VOUS AVEZ UN GRAND PROJET ?",
    "VOUS AVEZ UN GRAND PROJET ?",
    "VOUS AVEZ UN GRAND PROJET ?",
    "VOUS AVEZ UN GRAND PROJET ?",
    "À propos",
    "VOUS AVEZ UN GRAND PROJET ?",
    "VOUS AVEZ UN GRAND PROJET ?",
    "VOUS AVEZ UN GRAND PROJET ?",
    "À propos",
];

const InnerTextSlider = () => {
    return (
        <div className="ar-about-us-4-text-area">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ar-about-us-4-text-warp">
                            <Swiper
                                className='tp-brand-active slide-transtion'
                                {...brandMarqueeSwiperParams}
                            >
                                {slideTexts.map((text, index) => (
                                    <SwiperSlide key={index}>
                                        <h2 className="ar-about-us-4-text-title">
                                            {text}
                                        </h2>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default InnerTextSlider;
