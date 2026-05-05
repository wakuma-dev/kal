import React, { useReducer } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  yourMessage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

export default function useForm() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handleChange(e) {
    dispatch({
      type: "CHANGE_INPUT",
      field: e.target.name,
      value: e.target.value,
    });
  }

  return {
    values: state,
    handleChange,
  };
}
