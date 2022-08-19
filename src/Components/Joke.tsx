import React from "react";
import Card from "react-bootstrap/Card";

const Joke:React.FC<{joke:string}> = ({joke}) => {
  const cardStyle:object = {
    width: '20rem',
    margin: '3rem' };
  return (
    <Card style={cardStyle}>
      <Card.Body>
        {joke}
      </Card.Body>
    </Card>
  );
}

export default Joke;