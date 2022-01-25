import React from 'react';

class Image extends React.Component {
  render() {
    const { url, name } = this.props;
    return (
      <img src={url} alt={name}></img>
    )
  }
}

export default Image;