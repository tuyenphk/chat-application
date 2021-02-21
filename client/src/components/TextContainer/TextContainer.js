import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

export const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1 style={{fontFamily: 'Source Code Pro', marginLeft: '-100px', marginTop: '100px'}}>
        Live Chat
        <br />
        Application
      </h1>
      <h2 style={{fontFamily: 'Arial', marginLeft: '-100px', fontSize: '25px'}}>
        This was built by
        <br />
        React, Express,
        <br />
        Node, and Socket.io
      </h2>
    </div>
    {users ? (
      <div>
        <h1 style={{fontFamily: 'Source Code Pro', marginLeft: '-100px', marginTop: '-300px', fontSize: '35px'}}>Users chatting</h1>
        <div className='activeContainer' style={{fontFamily: 'Arial', marginLeft: '-100px', fontSize: '20px', marginTop: '-30px'}}>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);
