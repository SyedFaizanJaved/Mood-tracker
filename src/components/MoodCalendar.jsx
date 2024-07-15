// src/components/MoodCalendar.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MoodCalendar = ({ moods }) => {
  const tileContent = ({ date }) => {
    const moodEntry = moods.find(mood => mood.date === date.toISOString().split('T')[0]);
    return moodEntry ? <span>{moodEntry.mood}</span> : null;
  };

  return <Calendar tileContent={tileContent} />;
};

export default MoodCalendar;
