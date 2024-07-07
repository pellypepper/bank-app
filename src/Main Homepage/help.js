import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import NavMenu from "./navmenu";

// Import Swiper styles
import 'swiper/css';
// import required modules

// Import custom components
import Topmenu from './topmenu';



const Help = () => {



    const mainHeaderRef = useRef();

    useEffect(() => {
        changeBackground4();
    }, []);

    const changeBackground4 = () => {
        if (mainHeaderRef.current) {
            mainHeaderRef.current.style.background = 'rgb(9, 11, 11)';
        }
    };

    return (
        <div className="main-container lifestyle">
            <div className="lifestyle-container contain" ref={mainHeaderRef}>
                <Topmenu />
                <div className='swiper-container'>
                    <Swiper className=''
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='slide1 slide'> <p>Europe's island wonders <span>Get 2% cashback on spend over $100</span></p></SwiperSlide>
                        <SwiperSlide className='slide2 slide'><p>Your perfect beach getaway <span>Get 2% cashback on spend over $100</span></p></SwiperSlide>
                        <SwiperSlide className='slide3 slide'>Bicester Village</SwiperSlide>
                        <SwiperSlide className='slide4 slide'><p>Summer getway<span>Up to 75% discount off your stay</span></p></SwiperSlide>


                    </Swiper>
                </div>


                <div className='swiper-container-2'>
                    <Swiper className='swiper-slide'
                        spaceBetween={10}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='slide-1'><FontAwesomeIcon className='icon' icon={faShoppingBag} /> <p>Shop <span>Deals from top brands</span></p></SwiperSlide>
                        <SwiperSlide className=' slide-1'><FontAwesomeIcon className='icon' icon={faShoppingBag} /> <p>Travel <span>Get 2% cashback on spend over $100</span></p></SwiperSlide>
                        <SwiperSlide className='slide-1'> <FontAwesomeIcon className='icon' icon={faShoppingBag} /><p>Insure <span>Protect what matters</span></p></SwiperSlide>
                        <SwiperSlide className=' slide-1'><FontAwesomeIcon className='icon' icon={faShoppingBag} /> <p>Esim<span>Stay connected</span></p></SwiperSlide>
                        <SwiperSlide className=' slide-1'><FontAwesomeIcon className='icon' icon={faShoppingBag} /> <p>Donate<span>Give to causes</span></p></SwiperSlide>




                    </Swiper>
                </div>

                <p className='lifestyle-text'>What's new</p>

                <div className='swiper-container'>
                    <Swiper className=''
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='slide5 slide'> <p>OK Mobility<span>10% off</span></p></SwiperSlide>
                        <SwiperSlide className='slide6 slide'><p>Epidemic Sound <span>7-day complimentary trial</span></p></SwiperSlide>
                        <SwiperSlide className='slide7 slide'><p>Jacamo <span>20% off menswear</span></p></SwiperSlide>
                        <SwiperSlide className='slide8 slide'><p>On<span>Footwear and apparel</span></p></SwiperSlide>


                    </Swiper>
                </div>
                <p className='lifestyle-text'>Shop online <span> See all</span></p>


                <div className='swiper-container'>
                    <Swiper className=''
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='slide9 slide'> <p>Aesop<span>Skin, hair, and body</span></p></SwiperSlide>
                        <SwiperSlide className='slide10 slide'><p>LEGO store <span>Games and entertainment</span></p></SwiperSlide>
                        <SwiperSlide className='slide11 slide'><p>Cult beauty <span>Skin,hair and body</span></p></SwiperSlide>
                        <SwiperSlide className='slide12 slide'><p>Gousto<span>60% discount</span></p></SwiperSlide>


                    </Swiper>
                </div>

            </div>
            <NavMenu changeBackground={changeBackground4} />
        </div>
    );
};

export default Help;
