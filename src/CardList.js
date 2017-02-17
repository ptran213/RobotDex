import React from 'react';
import Card from './Card.js';

const CardList = (props) => (
    <div>
      {
        props.robots.map((robot) => (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        ))
       }
    </div>
);

CardList.propType = {
  robots: React.PropTypes.array.isRequire
}

export default CardList;
