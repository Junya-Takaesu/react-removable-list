import React, { useState } from "react";
import { data } from "../data";

const RemovableList = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>clear items</button>
    </React.Fragment>
  );
};

export default RemovableList;
