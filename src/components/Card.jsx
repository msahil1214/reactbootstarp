import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";

function Card1(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {" "}
            <p>
              {readMore ? props.text : `${props.text.substring(0, 200)}...`}
              <button
                className="btn btn-info"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : "  read more"}
              </button>
            </p>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Email: {props.listitem1 ? props.listitem1 : "Nil"}
          </ListGroup.Item>

          <ListGroup.Item>Availability: {props.listitem2}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="btn btn-primary" href={props.apply}>
            {" "}
            Apply Now{" "}
          </button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Card1;
