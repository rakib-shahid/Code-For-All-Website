"use client";
import { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BoardCard from "./BoardCard";
import boardInfo from "@/../public/assets/board_info/board.json";
import pastBoardInfo from "@/../public/assets/board_info/past_board.json";

const Board = forwardRef((props, ref) => {
  return (
    <section
      id="second-section"
      className="bg-gradient-to-b from-transparent to-custom-dark-blue"
    >
      <div className="text-center" ref={ref}>
        <h1 className="p-0 bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 text-5xl md:text-6xl font-extrabold mb-4 font-sans tracking-tight ">
          Our Board
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1600: { slidesPerView: 5 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper justify-center w-[90%] mx-auto pb-12 h-[35rem]"
        >
          {boardInfo.map((member, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <BoardCard
                image={member.image}
                name={member.name}
                role={member.role}
                description={member.description}
                link={member.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mb-20" />

        <h1 className="p-0 bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 text-5xl md:text-6xl font-extrabold mb-4 font-sans tracking-tight drop-shadow-[35px_35px_35px_rgba(255,255,255,0.45)]">
          Past Board
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1500: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper justify-center w-[90%] mx-auto h-[35rem] overflow-visible"
        >
          {pastBoardInfo.map((member, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <BoardCard
                image={member.image}
                name={member.name}
                role={member.role}
                description={member.description}
                link={member.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

export default Board;
