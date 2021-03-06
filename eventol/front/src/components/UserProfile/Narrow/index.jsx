import React from 'react';
import './index.scss';


const UserProfile = ({user}) => (
  <div className="UserProfileNarrow">
    <a href='/accounts/profile/'>
      <div className="User">
        <div className="name">{user.first_name} {user.last_name}</div>
        <div className="image">
          <div className="fa fa-user fa-2x"></div>
        </div>
      </div>
    </a>
  </div>
);

export default UserProfile;
