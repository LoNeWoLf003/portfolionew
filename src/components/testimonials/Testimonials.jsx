import React from "react";
import "./testimonial.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">My Clients' Words</h2>
      <span className="section__subtitle">Testimonals</span>
      <Swiper
        className="testimonials__container"
        loop={true}
        grabCursor={true}
        spaceBetween={48}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, img, title,post, desc }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={img} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__post">{post}</p>
              <p className="testimonial__description">{desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
