import React, { useState, useReducer } from "react";
import Modal from "./Modal";

// reducer function

import { reducer } from "./reducer";

import { defaultState } from "./defaultState";

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
