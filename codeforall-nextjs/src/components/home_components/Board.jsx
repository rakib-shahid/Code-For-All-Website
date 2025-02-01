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
      className="bg-gradient-to-b from-transparent to-custom-dark-blue pb-20 from-0% to-100% "
    >
      <div className="text-center" ref={ref}>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 text-6xl md:text-7xl font-bold font-mono">
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
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper justify-center w-[90%] mx-auto"
        >
          {boardInfo.map((member, index) => (
            <SwiperSlide
              key={index}
              className="py-4 flex justify-center items-center"
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

        <br />

        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 text-6xl md:text-7xl font-bold font-mono">
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
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper justify-center w-[90%] mx-auto"
        >
          {pastBoardInfo.map((member, index) => (
            <SwiperSlide
              key={index}
              className="py-4 flex justify-center items-center"
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
