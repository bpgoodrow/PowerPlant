const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();
export const stateControl1 = storeState();

const changeState = (prop) => {
  return (value) => {
    if (typeof value === "number") {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value
      });
    } else {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || "") + value
      });
    }
  };
};

export const food = changeState("soil")(5);
export const hydrate = changeState("water")(5);
export const lightRay = changeState("light")(5);
export const dietCoke = changeState("dietCoke")(100);
export const cokeZero = changeState("cokeZero")("ZERO");
