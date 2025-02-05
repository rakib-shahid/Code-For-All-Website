import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Lottie from "react-lottie";
import Meet_a_scientist_event3 from "../assets/Meet_a_scientist_event3.jpg";
import animationData from "../assets/PurpleSpacev2.json";

function PastEventCard({ title, description, images }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
<<<<<<< Updated upstream
    <section id="second-section" className="relative p-0 bg-transparent overflow-hidden">
      <div className="bg-gradient-to-tl from-white to- glow m-4 shadow-xl p-5 rounded-lg max-w-xs">
        <div className="flex flex-col justify-center mb-4 text-left w-full">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className={`text-lg ${isExpanded ? 'max-h-none' : 'max-h-20 overflow-hidden'}`}>
            {description}
          </p>
          <button
            onClick={handleReadMore}
            className=" rounded-lg bg-zinc-900 mt-2 text-purple-600 font-mono no-underline cursor-pointer text-m hover:glow"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
        <div className="w-full">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={false}
          >
            {images.map((image, idx) => (
              <div key={idx}>
                <img
                  className="w-full h-auto rounded-lg"
                  src={image}
                  alt={`Slide ${idx + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
=======
    <>
      <Card
        className="py-0 m-5 dark bg-gradient-to-tl from-violet-600 to-slate-50 shadow-neon-purple-initial hover:shadow-neon-purple-hover transition-shadow duration-500 ease-in-out w-[80%] md:w-[60%] lg:w-[32rem] mx-auto tracking-tight hover:scale-105"
        isPressable
        onPress={onOpen}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center bg-transparent bg-gradient-to-r from-purple-500 via-pink-300 to-purple-600 ">
          <h4 className="font-bold text-2xl mb-4 
                   text-white leading-relaxed      
          ">{title}</h4>
        </CardHeader>
        <CardBody className=" overflow-visible py-5 items-center">
          <Image
            alt={`${title} image`}
            className="object-cover rounded-xl mx-auto"
            src={images[0]}
            width={"90%"}
          />
           <h4 className="font-bold text-2xl text-black mb-4 mt-4">{title}</h4>
        </CardBody>
        <Drawer
          size="xl"
          className="dark"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <DrawerContent className="text-white">
            {(onClose) => (
              <>
                <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                  <Tooltip content="Close">
                    <Button
                      isIconOnly
                      className="text-default-400"
                      size="sm"
                      variant="light"
                      onPress={onClose}
                    >
                      <svg
                        fill="none"
                        height="20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                      </svg>
                    </Button>
                  </Tooltip>
                </DrawerHeader>
                <DrawerBody>
                  <div className="flex w-full justify-center items-center pt-6 mt-12">
                    <h1 className="text-4xl font-bold">{title}</h1>
                  </div>
                  <div className="flex w-full justify-center items-center ">
                    <Swiper
                      slidesPerView={1}
                      centeredSlides={true}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      mousewheel={{
                        forceToAxis: false,
                        sensitivity: 1,
                      }}
                      modules={[Pagination, Autoplay, Mousewheel]}
                      className="mySwiper py-10"
                    >
                      {images.map((image, index) => (
                        <SwiperSlide
                          key={index}
                          className="flex justify-center items-center"
                        >
                          <Image
                            isBlurred
                            isZoomed
                            alt="Event image"
                            className="aspect-square"
                            src={image}
                            width={400}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <p className="mt-10 px-6">{description}</p>
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </Card>
    </>
>>>>>>> Stashed changes
  );
}

export default PastEventCard;
