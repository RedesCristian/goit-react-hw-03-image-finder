import React, { Component } from 'react';

import { Audio } from 'react-loader-spinner';

export default class CustomLoader extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        ;
      </div>
    );
  }
}
