import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import ComingSoon from './components/ComingSoon';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home users={users} />} />
        <Route path="/profile/:id" element={<ProfilePage users={users} />} />
        <Route path="/posts" element={<ComingSoon />} />
        <Route path="/gallery" element={<ComingSoon />} />
        <Route path="/todo" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;