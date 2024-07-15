// src/components/MoodForm.js
import React, { useState, useEffect } from 'react';

const MoodForm = ({ addMood, currentMood }) => {
  const [mood, setMood] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setMood(currentMood.mood);
    setDate(currentMood.date);
  }, [currentMood]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood && date) {
      addMood({ mood, date });
      setMood('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Save Mood</button>
    </form>
  );
};

export default MoodForm;
