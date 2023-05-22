import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home(props) {
  return (
    <div className="container">
      <div className="box">
        <div className="heading">
          <h1>Select an account</h1>
        </div>
        <div className="list-container">
          <ul className="contact-list">
            {props.users.map(user => (  // Access the 'users' prop from 'props'
              <li key={user.id}>
                <Link to={`/profile/${user.id}`} className='users-list'>
                  <div className="user-single">
                    <img src={user.profilepicture} alt={user.name} />
                    <h3>{user.name}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}