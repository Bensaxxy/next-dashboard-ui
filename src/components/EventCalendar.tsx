"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary event data
// This should ideally come from a backend or state management solution
const evants = [
  {
    id: 1,
    title: "School Meeting",
    time: "12:00pm - 1:30pm",
    description: "Monthly school meeting with all staff and parents.",
  },
  {
    id: 2,
    title: "Teacher Meeting",
    time: "12:00pm - 1:30pm",
    description: "Monthly school meeting with all staff and parents.",
  },
  {
    id: 3,
    title: "Student Meeting",
    time: "12:00pm - 1:30pm",
    description: "Monthly school meeting with all staff and parents.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className=" bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className=" text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {evants.map((event) => (
          <div
            key={event.id}
            className=" p-4 border-2 border-gray-100 rounded-md border-t-4 odd:border-t-lameSky even:border-t-lamePurple"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600 font-semibold">{event.title}</h1>
              <span className=" text-xs text-gray-300">{event.time}</span>
            </div>
            <p className=" mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
