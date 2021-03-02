import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "./Firebase";

function TinderCards() {
  // people === const people = []
  // setPeople === people.push(.....)
  const [people, setPeople] = useState([]);

  // Piece of code which runs based on a condtion:
  useEffect(() => {
    // const unsubscribe = database;
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    //return () => {
    // this is the cleanup...
    //unsubscribe();
    //};
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
