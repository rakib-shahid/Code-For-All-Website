"use client";
import PastEventCard from "./PastEventCard";
// import { PASTEVENTSINFO } from "../PastEventsInfo";
// import { INCOMINGEVENTSINFO } from "../IncomingEventsInfo";
import IncomingEvent from "./IncomingEvent";
import { useEffect, useState } from "react";

const Events = () => {
  const [pastEventsInfo, setPastEventsInfo] = useState([]);
  const [incomingEventInfo, setIncomingEventsInfo] = useState([]);
  useEffect(() => {
    const fetchPastEventsInfo = async () => {
      const response = await fetch("/assets/event_info/past.json");
      const data = await response.json();
      setPastEventsInfo(data);
    };

    fetchPastEventsInfo();
  }, []);
  useEffect(() => {
    const fetchIncomingEventsInfo = async () => {
      const response = await fetch("/assets/event_info/incoming.json");
      const data = await response.json();
      setIncomingEventsInfo(data);
    };

    fetchIncomingEventsInfo();
  }, []);
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
        {incomingEventInfo.map((event, index) => (
          <IncomingEvent
            key={index}
            title={event.title}
            description={event.description}
            images={event.image}
            date={event.date}
            location={event.location}
            rsvpLink={event.rsvpLink}
          />
        ))}
        {/* <IncomingEvent
          title={incomingEventInfo[0].title}
          description={incomingEventInfo[0].description}
          images={incomingEventInfo[0].image}
          date={incomingEventInfo[0].date}
          location={incomingEventInfo[0].location}
          rsvpLink={incomingEventInfo[0].rsvpLink}
        ></IncomingEvent> */}
      </div>
    </div>
  );
};

export default Events;
