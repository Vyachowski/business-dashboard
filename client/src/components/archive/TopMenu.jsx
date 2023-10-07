import React from 'react';

// Example data
const userName = 'Slava Haikin';
const userRole = 'Owner';
const userPic = 'pop';
const TopMenu = () => {
  return (
    <header className={'header'}>
      <button className={'theme-switcher'}></button>
      <div className={'user-menu'}>
        <p className={'user-info'}>
          <span className={'user-name'}>{userName}</span>
          <span className={'user-role'}>{userRole}</span>
        </p>
        <img src={userPic} alt="User avatar."/>
      </div>
    </header>
  )
}

export default TopMenu;