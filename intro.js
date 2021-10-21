import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        alert(`not yet updated`);
        // alert(JSON.stringify(updateData));
        break;

      default:
        break;
    }
  };

  // useEffect to limit the number of API requests
  useEffect(() => {
    // fetching data from API
    // rather than creating a db.json I'm using a live API
    const getRandomUsers = async (size) => {
      try {
        const data = await axios.get(
          `https://random-data-api.com//api/users/random_user?size=${size}`,
        );

        setCurrentData(data.data);
        // console.log(data.data);
        return data;
      } catch (err) {
        console.log('error: ', err);
      }
    };
    // size of hardcoded
    getRandomUsers(1);
  }, []);

  return (
    <div className="intro">
      <p>This is my Starter Project</p>
      <button onClick={() => alertFunc(`currentData`, currentData)}>
        Current Data
      </button>
      <button onClick={() => alertFunc(`updateData`, currentData)}>
        Update Data
      </button>
      <p>
        <strong>Name:</strong>
        {currentData
          ? ` ${currentData[0].first_name} ${currentData[0].last_name}`
          : `not yet received`}
      </p>
      <p>
        <strong>User Name:</strong>
        {currentData ? ` ${currentData[0].username}` : `not yet received`}
      </p>
      <p>
        <strong>Location:</strong>
        {currentData ? ` ${currentData[0].address.city}` : `not yet received`}
      </p>
    </div>
  );
};

export default Intro;
