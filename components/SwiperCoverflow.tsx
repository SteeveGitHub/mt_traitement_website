import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const SwiperCoverflow = () => {

    const images = [
        { src: '/images/clients/INGECAL.png', alt: 'INGECAL' },
        { src: '/images/clients/alpha-meca.png', alt: 'Alpha Meca' },
        { src: '/images/clients/burdeyron.png', alt: 'Burdeyron' },
        { src: '/images/clients/CMW.png', alt: 'CMW' },
        { src: '/images/clients/gardette.png', alt: 'Gardette' },
        { src: '/images/clients/GOLZIO.jpg', alt: 'Golzio' },
        { src: '/images/clients/lamache.png', alt: 'La Mache' },
        { src: '/images/clients/SAMSON.png', alt: 'Samson' },
        { src: '/images/clients/SMGB.png', alt: 'SMGB' },
        { src: '/images/clients/Thimonnier.png', alt: 'Thimonnier' },
        { src: '/images/clients/tractel.png', alt: 'Tractel' },
    ];

    return (
        <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                            width: '100%',
                            height: '100%',
                            maxWidth: '100px', /* Ajustez cette largeur selon vos besoins */
                            maxHeight: '100px', /* Ajustez cette hauteur selon vos besoins */
                            objectFit: 'contain' /* Ou utilisez 'contain' selon le besoin */
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperCoverflow;