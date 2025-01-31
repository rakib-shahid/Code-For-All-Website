"use client";

import PastEventCard from "./PastEventCard";
import IncomingEvent from "./IncomingEvent";
import useSWR from "swr";
import { motion } from "framer-motion";
import { Spinner } from "@heroui/spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";

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
      <h4 className="p-0 bg-clip-text text-transparent bg-gradient text-4xl md:text-5xl font-bold mb-4 font-mono text-center text-white">
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
              />
            </motion.div>
          ))
        ) : (
          <div className="flex justify-center items-center mt-4">
            <h1 className="text-[2rem] text-white font-bold">No past events</h1>
          </div>
        )}
      </motion.div>

      <h4 className="p-0 bg-clip-text text-transparent bg-gradient text-4xl md:text-5xl font-bold mt-[6rem] font-mono text-center text-white">
        Upcoming Events
      </h4>

      <div className="flex flex-wrap justify-center mt-8">
        {upcomingEventData.length > 0 ? (
          <div className="relative w-full max-w-2xl mx-auto">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Navigation]}
              className="mySwiper w-full"
              navigation={true}
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
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-4">
            <h1 className="text-[2rem] text-white font-bold">
              No upcoming events
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
