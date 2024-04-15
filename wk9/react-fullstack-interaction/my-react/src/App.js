// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const [usernames, setUsernames] = useState([]);
  const [userData, setUserData] = useState([]);

  const updateNames = (e) => {
    setUsernames(e.target.value.split(","));
  }

  useEffect(() => {
    const requests = usernames.map(username => fetch(`https://api.github.com/users/${username}`));
    Promise.allSettled(requests)
      .then(results => Promise.all(results.map(res => res.value.json())))
      .then(data => data.filter((user) => user.name))
      .then(data => setUserData(data));
  }, [usernames]);

  return (
    <div className="App">
      <input type="text" onChange={updateNames}></input>
      <div>
        {
          userData.map((user, index) => (
            <>
              <div>Name: {user['name']}</div>
              <img src={user['avatar_url']}></img>
            </>
          ))
        }
      </div>
    </div>
  );
}

export default App;
