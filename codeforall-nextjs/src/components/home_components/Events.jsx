"use client";

import { useState } from "react";
import PastEventCard from "./PastEventCard";
import IncomingEvent from "./IncomingEvent";
import useSWR from "swr";
import { motion } from "framer-motion";
import { Spinner } from "@heroui/spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

const fetcher = (url, options = {}) =>
  fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Fetcher error:", error);
      throw error;
    });

const Events = () => {
  const { data: upcomingEventData, error: upcomingEventError } = useSWR(
    "/api/upcoming_event",
    fetcher
  );

  const { data: recentEventData, error: recentEventError } = useSWR(
    "/api/recent_events",
    fetcher
  );

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMoving, setIsMoving] = useState(false);

  if (!upcomingEventData || !recentEventData) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Spinner />
      </div>
    );
  }

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return (
    <div className="relative z-10 flex-col">
      <h4
        className="p-0 bg-clip-text text-5xl md:text-6xl font-extrabold mb-4 font-sans
                tracking-tight text-center text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.85)]"
      >
        Past Events
      </h4>

      <motion.div
        className="flex flex-wrap justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={containerVariant}
      >
        {recentEventData.length > 0 ? (
          recentEventData.map((event, index) => (
            <motion.div key={index} className="m-4" variants={cardVariant}>
              <PastEventCard
                title={event.title}
                description={event.description}
                mainImage={event.main_image_url}
                images={event.additional_images}
                date={event.event_time}
              />
            </motion.div>
          ))
        ) : (
          <div className="flex justify-center items-center mt-4">
            <h1 className="text-[2rem] text-white font-bold">No past events</h1>
          </div>
        )}
      </motion.div>

      <h4 className="p-0 bg-clip-text text-5xl md:text-6xl font-extrabold mb-4 font-sans tracking-tight  mt-[6rem]  text-center text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.85)]">
        Upcoming Events
      </h4>

      <motion.div
        className="flex flex-wrap justify-center mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        variants={containerVariant}
      >
        {upcomingEventData.length > 0 ? (
          <div className="relative w-[80%] max-w-2xl mx-auto">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-full"
              onSwiper={setSwiperInstance}
              onSlideChange={() => setIsMoving(true)}
              onTransitionEnd={() => setIsMoving(false)}
            >
              {upcomingEventData.map((event, index) => (
                <SwiperSlide key={index} className="rounded-lg">
                  <IncomingEvent
                    title={event.title}
                    description={event.description}
                    images={event.flyer_image_url}
                    timestamp={event.event_time}
                    location={event.location}
                    rsvpLink={event.rsvp_url}
                    isMoving={isMoving}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center mt-4 space-x-6">
              <button
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
                onClick={() => swiperInstance?.slidePrev()}
              >
                &lt;
              </button>
              <button
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
                onClick={() => swiperInstance?.slideNext()}
              >
                &gt;
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-4">
            <h1 className="text-[2rem] text-white font-bold">
              No upcoming events
            </h1>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Events;
