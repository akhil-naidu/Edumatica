import React, { useState } from 'react';
import axios from 'axios';

const Update = (props) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  // const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [{ name, username }];

    const updateData = async () => {
      try {
        const data = await axios
          .post(`https://jsonplaceholder.typicode.com/users`, newData)
          .then((response) => {
            // console.log(response.data);
            // alert(JSON.stringify(response.data));
            props.updateWithNewDate(response.data);
          });

        return data;
      } catch (err) {
        console.log('error: ', err);
      }
    };
    // size of hardcoded
    updateData();
  };

  // We can also create an individual input component, but negating it.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="mainName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
