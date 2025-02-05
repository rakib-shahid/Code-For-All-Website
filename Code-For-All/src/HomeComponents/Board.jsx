import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BoardCard from './BoardCard';
import {BOARDINFO} from '../BoardInfo'
import {PASTBOARDINFO} from '../PastBoard'
import { forwardRef, useEffect, useState } from 'react';

const Board = forwardRef((props, ref) => {
<<<<<<< Updated upstream
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return(
      <section id="second-section" className=" bg-gradient-to-b from-white to-custom-dark-blue pb-20 ">

        <div className = "mt-36 text-center" ref={ref}>
            <h1 className="p-0 
                            bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 
                            text-6xl md:text-7xl font-bold mb-4 font-mono">Our Board</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 1s linear"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                transitionDuration={1000}
            >
                {BOARDINFO.map((member) => (
                    <BoardCard image = {member.image} name = {member.name} role = {member.role} description={member.description} link = {member.link}/>
                ))}
            </Carousel>
            <br/>
            <h1 className="p-0 
                            bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 
                            text-6xl md:text-7xl font-bold mb-4 font-mono">Past Board</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 1s linear"
                dotListClass=""
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                transitionDuration={1000}
            >
                {PASTBOARDINFO.map((member) => (
                    <BoardCard image = {member.image} name = {member.name} role = {member.role} description={member.description} link = {member.link}/>
                ))}
            </Carousel>
        </div>
        
        </section>
        
    )
})
=======
  return (
    <section
      id="second-section"
      className="bg-gradient-to-b from-transparent to-custom-dark-blue pb-72"
    >
      <div className="text-center" ref={ref}>
        <h1 className="p-0 bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 text-5xl md:text-6xl font-extrabold mb-4 font-sans tracking-tight">
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
          className="mySwiper pb-12" // Added padding-bottom
        >
          {BOARDINFO.map((member, index) => (
            <SwiperSlide key={index}>
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

        <div className="mb-20"></div> {/* Replaced br with margin spacing */}

        <h1 className="p-0 bg-clip-text text-transparent bg-gradient-to-r from-black to-purple-400 text-5xl md:text-6xl font-extrabold mb-4 font-sans tracking-tight">
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
          className="mySwiper pb-12" // Added padding-bottom
        >
          {PASTBOARDINFO.map((member, index) => (
            <SwiperSlide key={index}>
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
>>>>>>> Stashed changes

export default Board;