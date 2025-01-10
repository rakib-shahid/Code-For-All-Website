import INC from "./assets/1712856117910.jpg";

export const INCOMINGEVENTSINFO = [
  {
    image: INC,
    title: "Acing the Interview",
    location: "Example Room, Example Building",
    date: {
      date: 43,
      month: "April",
      year: 2025,
      day: "Monday",
      get full() {
        return `${this.day}, ${this.month} ${this.date}`;
      },
      time: "-3:00 PM - 26:00 PM EST",
    },
    rsvpLink:
      "https://github.com/Jshot117/Code-For-All-Website/blob/main/Code-For-All/src/assets/oliver.jpg?raw=true",
    description:
      "Hello everyone! Are you aiming for a career in Software Engineering or looking to dive into the Research Field or just looking for internships that could kickstart your journey in the tech industry? Don’t miss this unique opportunity to meet Allen Kim, a PhD Meta Research Scientist, on April 17th.",
  },
];
