
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className="left" src="https://via.placeholder.com/200x600"/>  <img  className="first-image" src="https://via.placeholder.com/600"/> <img className="second-image" src="https://via.placeholder.com/350x600"/>  <img className="third-image" src="https://via.placeholder.com/350x600"/>  <img src="https://via.placeholder.com/200x600" className="right"/></SwiperSlide>
        <SwiperSlide><img className="left" src="https://via.placeholder.com/200x600"/>  <img  className="first-image" src="https://via.placeholder.com/600"/> <img className="second-image" src="https://via.placeholder.com/350x600"/>  <img className="third-image" src="https://via.placeholder.com/350x600"/>  <img src="https://via.placeholder.com/200x600" className="right"/></SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
