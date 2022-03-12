import React, { useState, useEffect } from 'react';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=9`
    );
    const jsonData = await response.json();
    setPopular(jsonData.recipes);
  };

  return (
    <div>
      {popular.map((receipe) => (
        <div key={receipe.id}>
          <p>{receipe.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Popular;
