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
        alert(`Work in Progress`);
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
          `https://jsonplaceholder.typicode.com/users`,
        );

        setCurrentData(data.data);
        // console.log(data.data);
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
      <button onClick={() => alertFunc(`currentData`, currentData)}>
        Current Data
      </button>
      <button onClick={() => alertFunc(`updateData`, currentData)}>
        Update Data
      </button>
      {/* All users */}
      <div>
        <h2>All Users</h2>
        {currentData
          ? currentData.map((user) => <div key={user.id}>{user.name}</div>)
          : `not yet received`}
      </div>

      <h2>Displaying First User</h2>

      <div>
        <strong>Name: </strong>
        {currentData ? currentData[0].name : `not yet received`}
        <br />

        <strong>User Name: </strong>
        {currentData ? currentData[0].username : `not yet received`}
        <br />

        <strong>Location: </strong>
        {currentData ? currentData[0].address.city : `not yet received`}
      </div>
    </div>
  );
};

export default Intro;
