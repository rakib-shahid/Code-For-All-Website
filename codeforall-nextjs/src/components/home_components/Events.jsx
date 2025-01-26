import PastEventCard from "./PastEventCard";
import IncomingEvent from "./IncomingEvent";
import pastEventsInfo from "@/../public/assets/event_info/past.json";
import incomingEventInfo from "@/../public/assets/event_info/incoming.json";

const Events = async () => {
  const resIncoming = await fetch("/api/upcoming_event");
  const incomingEventJson = await resIncoming.json();
  console.log(incomingEventJson);
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
      </div>
    </div>
  );
};

export default Events;
