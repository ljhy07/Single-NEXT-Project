'use client'

import { useState, useEffect } from "react";

export default function Calendar() {
  const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const MONTH = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

  const [today, setToday] = useState(new Date());
  const [calendarData, setCalendarData] = useState({ day: "", date: 0, month: "" });
  const [days, setDays] = useState<number[]>([]);

  useEffect(() => {
    createCalendar(today);
  }, [today]);

  const createCalendar = (date: Date) => {
    const day = WEEK[date.getDay()];
    const month = `${MONTH[date.getMonth()]} ${date.getFullYear()}`;
    const dateNumber = date.getDate();

    setCalendarData({ day, date: dateNumber, month });

    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let calendarDays: number[] = [];

    // Fill with empty cells until the first day of the month
    for (let i = 0; i < firstDate.getDay(); i++) {
      calendarDays.push(0); // 0 represents an empty cell
    }

    // Fill with actual days
    for (let j = 1; j <= lastDate.getDate(); j++) {
      calendarDays.push(j);
    }

    setDays(calendarDays);
  };

  const handleNextMonthClick = () => {
    setToday(new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()));
  };

  const handlePrevMonthClick = () => {
    setToday(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
  };

  return (
    <div>
      <div id="header">
        <div id="day">{calendarData.day}</div>
        <div id="date">{calendarData.date}</div>
        <div id="month">{calendarData.month}</div>
      </div>

      <table id="calendar-table">
        <thead>
          <tr>
            {WEEK.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(Math.ceil(days.length / 7))
            .fill(null)
            .map((_, weekIndex) => (
              <tr key={weekIndex}>
                {days.slice(weekIndex * 7, weekIndex * 7 + 7).map((day, dayIndex) => (
                  <td key={dayIndex}>{day !== 0 ? day : ""}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>

      <button id="prev-button" onClick={handlePrevMonthClick}>Prev</button>
      <button id="next-button" onClick={handleNextMonthClick}>Next</button>
    </div>
  );
}
