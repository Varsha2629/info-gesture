import React, { useContext, useEffect } from "react";
import { EventsContext } from "./hooks/EventsProvider";
import { Card, Button } from "react-bootstrap";

const Events = (props) => {
  const { events, getEvents, location } = useContext(EventsContext);
  const { currentFilter } = props;

  useEffect(() => {
    getEvents();
  }, []);

  const allEvents = events
    .filter(
      (x) =>
        (x.category === currentFilter || currentFilter === "") &&
        x.location.toLowerCase().includes(location.toLowerCase())
    )
    .map((item) => {
      console.log("item", item);
      var d = new Date(item.date);
      var date = d.toString().split(" ").slice(0, 4).join(" ");

      return (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {date} •{item.location}
              </Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Message</Button>
            </Card.Body>
          </Card>
        </>
      );
    });

  return (
    <>
      <h1>Events</h1>
      <h3>{currentFilter}</h3>
      {allEvents}
    </>
  );
};

export default Events;
