import React from 'react';
import Image from './Image';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = this.props.pokemon;

    return (
      <section>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weight: ${value} ${measurementUnit} `}</p>
        </div>
        <Image url={image} altDescription={name} />
      </section>
    )
  }
}

export default Pokemon;