import React, { useState, useEffect } from 'react';

import './styles.css';

const MainApp = () => {
  const [users, setUsers] = useState([]);

  const fetchApi = () => {
    fetch('https://api.github.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className='box'>
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <div className='card-container'>
              <div className='card-img-container'>
                <img className='card-img' src={user.avatar_url} alt='' />
              </div>
              <div className='card-user-data'>
                <p>User name: {user.login}</p>
                <p>{user.type} </p>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className='note'>No data available</h2>
      )}
    </div>
  );
};

export default MainApp;
