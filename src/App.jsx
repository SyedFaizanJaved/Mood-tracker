// src/App.js
import React, { useState, useEffect } from 'react';
import MoodForm from './components/MoodForm';
import MoodList from './components/MoodList';
import MoodCalendar from './components/MoodCalendar';
import MoodChart from './components/MoodChart';
import './App.css';

const App = () => {
  const [moods, setMoods] = useState([]);
  const [currentMood, setCurrentMood] = useState({ mood: '', date: '' });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem('moods')) || [];
    setMoods(savedMoods);
  }, []);

  useEffect(() => {
    localStorage.setItem('moods', JSON.stringify(moods));
  }, [moods]);

  const addMood = (mood) => {
    if (editIndex !== null) {
      const updatedMoods = moods.map((m, index) => (index === editIndex ? mood : m));
      setMoods(updatedMoods);
      setEditIndex(null);
    } else {
      setMoods([...moods, mood]);
    }
    setCurrentMood({ mood: '', date: '' });
  };

  const editMood = (index) => {
    setCurrentMood(moods[index]);
    setEditIndex(index);
  };

  const deleteMood = (index) => {
    const updatedMoods = moods.filter((_, i) => i !== index);
    setMoods(updatedMoods);
  };

  return (
    <div className="App">
      <h1>Mood Tracker</h1>
      <MoodForm addMood={addMood} currentMood={currentMood} />
      <MoodList moods={moods} editMood={editMood} deleteMood={deleteMood} />
      <MoodCalendar moods={moods} />
      <MoodChart moods={moods} />
    </div>
  );
};

export default App;
