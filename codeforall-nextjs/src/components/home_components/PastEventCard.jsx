"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { format, parseISO } from "date-fns";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Tooltip,
  Button,
} from "@heroui/react";

function PastEventCard({ title, description, mainImage, images, date }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const parsedDate = parseISO(date);
  const month = format(parsedDate, "MMMM");
  const day = format(parsedDate, "dd");
  const full = format(parsedDate, "MMMM do yyyy");
  const time = format(parsedDate, "h:mm a");

  return (
    <>
      <Card
        className="py-0 m-5 dark bg-gradient-to-tl from-violet-600 to-slate-50 shadow-neon-purple-initial hover:shadow-neon-purple-hover transition-shadow duration-500 ease-in-out w-[80%] md:w-[60%] lg:w-[32rem] mx-auto tracking-tight hover:scale-105"
        isPressable
        onPress={onOpen}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center bg-transparent bg-gradient-to-r from-purple-500 via-pink-300 to-purple-600 ">
          <h4
            className="font-bold text-2xl mb-4 
                   text-white leading-relaxed   

                 
                  
          "
          >
            {title}
          </h4>
        </CardHeader>
        <CardBody className=" overflow-visible py-5 items-center">
          <Image
            alt={`${title} image`}
            className="object-cover rounded-xl mx-auto"
            src={mainImage}
            width={"90%"}
          />
          <h4 className="font-bold text-[1rem] text-black opacity-50 mb-4 mt-4">
            {full}
          </h4>
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
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {images.map((image, index) => (
                        <SwiperSlide
                          key={index}
                          className="flex justify-center items-center my-[4rem]"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
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
  );
}

export default PastEventCard;
