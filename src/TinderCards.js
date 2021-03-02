import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  // people === const people = []
  // setPeople === people.push(.....)
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:
        "https://historythings.com/wp-content/uploads/2016/06/SteveJobsBook.jpg",
    },
    {
      name: "Mark Zuckerberg",
      url:
        "https://i.insider.com/5d84cf172e22af00cf69451a?width=1000&format=jpeg&auto=webp",
    },
  ]);

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
