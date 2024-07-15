// src/components/MoodList.js
import React from 'react';

const MoodList = ({ moods, editMood, deleteMood }) => {
  return (
    <ul>
      {moods.map((mood, index) => (
        <li key={index}>
          {mood.date}: {mood.mood}
          <button onClick={() => editMood(index)}>Edit</button>
          <button onClick={() => deleteMood(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MoodList;
