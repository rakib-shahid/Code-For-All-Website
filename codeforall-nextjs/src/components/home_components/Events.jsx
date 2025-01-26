"use client";
import PastEventCard from "./PastEventCard";
import IncomingEvent from "./IncomingEvent";
import pastEventsInfo from "@/../public/assets/event_info/past.json";
import useSWR from "swr";

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
  if (!upcomingEventData) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-12xl text-white">Loading...</h1>
      </div>
    );
  } else {
    console.log(upcomingEventData);
    return (
      <div className="relative z-10 flex-col">
        <h4 className="p-0 bg-clip-text text-transparent bg-gradient text-4xl md:text-5xl font-bold mb-4 font-mono text-center text-white">
          Past Events
        </h4>

        <div className="flex flex-wrap justify-center">
          {pastEventsInfo.map((event, index) => (
            <PastEventCard
              key={index}
              title={event.title}
              description={event.description}
              images={event.image}
            />
          ))}
        </div>

        <h4 className="p-0 bg-clip-text text-transparent bg-gradient text-4xl md:text-5xl font-bold mt-[6rem] font-mono text-center text-white">
          Upcoming Event
        </h4>

        <div className="flex flex-wrap justify-center ">
          <IncomingEvent
            title={upcomingEventData.title}
            description={upcomingEventData.description}
            images={upcomingEventData.flyer_image_url}
            timestamp={upcomingEventData.event_time}
            location={upcomingEventData.location}
            rsvpLink={upcomingEventData.rsvp_url}
          />
        </div>
      </div>
    );
  }
};

export default Events;
