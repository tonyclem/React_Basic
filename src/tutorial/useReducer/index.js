import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../data";
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text  "
            value={name}
            placeholder="name..."
            onChange={(e) => setName(e.target.value)}
          />
          <button>Add</button>
        </div>
      </form>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="">
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
