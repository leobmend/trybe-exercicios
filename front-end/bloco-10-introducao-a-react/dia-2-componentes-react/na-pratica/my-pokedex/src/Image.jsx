import React from 'react';

class Image extends React.Component {
  render() {
    const { url, altDescription } = this.props;
    return (
      <img src={url} alt={altDescription}></img>
    )
  }
}

export default Image;