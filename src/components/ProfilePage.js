import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProfilePage.css';
import MapImage from './Map';

export default function ProfilePage({ users }) {
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="profilePage">
      <div className="profileContainer">
        <div className="leftBar">
          <div className="leftBarList">
            <div>
              <Link to={`/profile/${user.id}`} className="leftbarText">
                Profile
              </Link>
            </div>
            <div>
              <Link to="/posts" className="leftbarText">
                Post
              </Link>
            </div>
            <div>
              <Link to="/gallery" className="leftbarText">
                Gallery
              </Link>
            </div>
            <div>
              <Link to="/todo" className="leftbarText">
                Todo
              </Link>
            </div>
          </div>
        </div>
        <div className="profileWrapper">
          <div className="profileHead">
            <span className="headLeftText">Profile</span>
            <div className="headRight">
              <img src={user.profilepicture} alt="" />
              <span>{user.name}</span>
            </div>
          </div>
          <div className="profileDetails">
            <div className="generalInfo">
              <img className="profileImage" src={user.profilepicture} alt="" />
              <div className="name">{user.name}</div>
              <div className="userDetail">
                <span className="label">Username:</span> {user.username}
              </div>
              <div className="userDetail">
                <span className="label">e-mail:</span> {user.email}
              </div>
              <div className="userDetail">
                <span className="label">Phone:</span> {user.phone}
              </div>
              <div className="userDetail">
                <span className="label">Website:</span> {user.website}
              </div>
              <hr />
              <div className="name">Company</div>
              <div className="companyDetail">
                <span className="label">Name:</span>{' '}
                <span className="text">{user.company.name}</span>
              </div>
              <div className="companyDetail">
                <span className="label">Catchphrase:</span>{' '}
                <span className="text">{user.company.catchPhrase}</span>
              </div>
              <div className="companyDetail">
                <span className="label">BS:</span>{' '}
                <span className="text">{user.company.bs}</span>
              </div>
            </div>
            <div className="addressInfo">
              <div className="adname">Address :</div>
              <div className="addressDetail">
                <span className="adlabel">Street :</span> {user.address.street}
              </div>
              <div className="addressDetail">
                <span className="adlabel">Suite :</span> {user.address.suite}
              </div>
              <div className="addressDetail">
                <span className="adlabel">City :</span> {user.address.city}
              </div>
              <div className="addressDetail">
                <span className="adlabel">Zipcode :</span> {user.address.zipcode}
              </div>
              <div className="addressImg">
                <MapImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}