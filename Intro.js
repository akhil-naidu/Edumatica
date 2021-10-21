import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Update from './Update.js';

const Intro = () => {
  // saving the data;
  const [currentData, setCurrentData] = useState('');

  // Just a way for me to demonstrate the status
  const alertFunc = (dataOf, currentData) => {
    switch (dataOf) {
      case 'currentData':
        // alert(JSON.stringify(currentData));
        alert(`check your console`);
        console.log(currentData);
        break;

      case 'updateData':
        alert(`Work in Progress`);

        break;

      default:
        break;
    }
  };

  const updateFunc = (newData) => {
    setCurrentData(newData);
    alert(`The UI was updated accordingly`);
  };

  // useEffect to limit the number of API requests
  useEffect(() => {
    // fetching data from API
    // rather than creating a db.json I'm using a live API
    const getRandomUsers = async (size) => {
      try {
        const data = await axios.get(
          `https://jsonplaceholder.typicode.com/users`,
        );

        setCurrentData(data.data);

        return data;
      } catch (err) {
        console.log('error: ', err);
      }
    };
    // size of hardcoded
    getRandomUsers();
  }, []);

  return (
    <div className="intro">
      <h1>My Starter Project</h1>
      <button onClick={() => alertFunc(`currentData`, currentData)}>
        Current Data
      </button>
      <button onClick={() => alertFunc(`updateData`, currentData)}>
        Update Data
      </button>

      <h2>Displaying First User</h2>

      <div>
        <strong>Name: </strong>
        {currentData ? currentData[0].name : `not yet received`}
        <br />

        <strong>User Name: </strong>
        {currentData ? currentData[0].username : `not yet received`}
        <br />
      </div>

      <h2>An Edit Form</h2>
      <Update updateWithNewDate={(newData) => updateFunc(newData)} />
    </div>
  );
};

export default Intro;
