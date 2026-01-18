import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import groupImage from "../assets/images/group.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Review = () => {
  const reviewData = [];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8">
      <h1
        className="text-[var(--heading)] text-center font-[900]
                   text-2xl sm:text-3xl md:text-4xl"
      >
        Our Clients Say!!!
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={900}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mt-10"
      >
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
const ReviewCard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col bg-[#EFFDF5] p-4 rounded-lg shadow-lg">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="text-lg text-[var(--bg-color)]"
        />

        <p className="text-sm text-[var(--paragraph-color)] mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={groupImage}
            alt="Client"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <h2 className="text-base font-semibold text-[var(--heading)]">
              Kumar Neupane
            </h2>
            <p className="text-xs text-[var(--paragraph-color)]">Profession</p>
          </div>
        </div>
      </div>
    </div>
  );
};
