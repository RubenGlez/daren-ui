import React from 'react';
import './Avatar.scss';


const Avatar = props => {
  const { user } = props;
  return (
    <div className="dui-avatar">
      <span className="dui-avatar-initials">
        {user.firstName.charAt(0)}
        {user.lastName.charAt(0)}
      </span>
    </div>
  );
};

export default Avatar;
