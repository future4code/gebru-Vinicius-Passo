import { Swiper } from 'swiper/react';
import 'swiper/css';

export const Slied = ({settings, children }) => {

    return (
        <Swiper {...settings}>
            {children}
        </Swiper>
    );
}