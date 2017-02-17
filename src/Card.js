import React from 'react';

function Card(props) {
  return (
    <div className="bg-light-purple dib pa3 ma2 tc br3 grow">
      <img
        role="presentation"
        src={`//robohash.org/${props.id}?size=200x200`}
      />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired
}

export default Card;
