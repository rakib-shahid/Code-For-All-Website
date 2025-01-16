import Example from "../components/examplecomponent";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div id="home">
        <Example />
      </div>
      <div id="about"></div>

      <div id="board" className="relative">
        <div className="absolute inset-x-0 -bottom-20 flex -z-1 opacity-40 pointer-events-none"></div>
      </div>

      <div id="event" className="relative">
        <div className="absolute inset-x-0 -top-20 flex z-10 h-72 opacity-85"></div>
      </div>

      <div id="contact"></div>
    </div>
  );
}
