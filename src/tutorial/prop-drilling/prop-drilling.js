import React from "react";
import { data } from "../../data";

const PropDrilling = () => {
  const [people, setPeople] = React.useState(data);

  const removePerson = (id) => {
    setPeople((people) => people.filter((person) => person.id !== id));
  };

  return (
    <section>
      <h1>Prop Drillng </h1>;
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
