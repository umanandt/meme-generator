import { useReducer } from "react";

const initialValue = {
  value: "",
};

const valueHandlerReducer = (state, action) => {
  if (action.type === "Change") {
    return { value: action.value };
  }

  return state;
};

const useForm = () => {
  const [inputValue, dispatch] = useReducer(valueHandlerReducer, initialValue);
  const onChangeHandler = (e) => {
    dispatch({ type: "Change", value: e.target.value });
  };
  

  return {
    value: inputValue.value,
    onChangeHandler,
  };
};

export default useForm;
