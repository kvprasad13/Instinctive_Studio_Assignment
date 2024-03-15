import React from 'react';
import Card from './Card';

const App = () => {
  const data = {
    title: "Animation in UI Design (Part 2)",
    name: "Vishal Pulikottil",
    timeInMinutes: 15,
    favorite: true,
    progress: 75

  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card data={data} />
    </div>
  );
}

export default App;
