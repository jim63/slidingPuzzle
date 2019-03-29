export const changePosition = id => {
  return { type: "CHANGE_POSITION", payload: id };
};

export const welcome = name => {
  return { type: "SHOW_NAME", payload: name };
};

export const startNewGame = () => {
  return { type: "START_NEW_GAME" };
};

export const getBreaker = () => {
  return { type: "GET_BREAKER" };
};
