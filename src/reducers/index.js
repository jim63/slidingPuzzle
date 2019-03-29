import { combineReducers } from "redux";

//! status 1:active; 2:done; 3:delete
let gridStatusDefault = {
  gridStatus: [
    { currentNum: 1, gridID: 1 },
    { currentNum: 2, gridID: 2 },
    { currentNum: 3, gridID: 3 },
    { currentNum: 4, gridID: 4 },
    { currentNum: 5, gridID: 5 },
    { currentNum: 6, gridID: 6 },
    { currentNum: 7, gridID: 7 },
    { currentNum: 8, gridID: 8 },
    { currentNum: null, gridID: 9 }
  ],
  blankGridId: 9,
  start: false,
  step: 0
};

let breakersLocalStorage = window.localStorage.getItem("breaker");
if (breakersLocalStorage === null) {
  breakersLocalStorage = JSON.stringify([]);
}

const getList = (status = gridStatusDefault, action = "") => {
  let blankGridId = status.blankGridId;
  let statusNew = JSON.parse(JSON.stringify(status));

  if (action.type == "CHANGE_POSITION") {
    let id = action.payload;
    if (id == 1) {
      if (blankGridId == 2 || blankGridId == 4) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
    if (id == 2) {
      if (blankGridId == 1 || blankGridId == 3 || blankGridId == 5) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
    if (id == 3) {
      if (blankGridId == 2 || blankGridId == 6) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
    if (id == 4) {
      if (blankGridId == 1 || blankGridId == 5 || blankGridId == 7) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
    if (id == 5) {
      if (
        blankGridId == 2 ||
        blankGridId == 4 ||
        blankGridId == 6 ||
        blankGridId == 8
      ) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
    if (id == 6) {
      if (blankGridId == 3 || blankGridId == 5 || blankGridId == 9) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
    if (id == 7) {
      if (blankGridId == 4 || blankGridId == 8) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
    if (id == 8) {
      if (blankGridId == 5 || blankGridId == 7 || blankGridId == 9) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
    if (id == 9) {
      if (blankGridId == 6 || blankGridId == 8) {
        statusNew.gridStatus[blankGridId - 1].currentNum =
          status.gridStatus[action.payload - 1].currentNum;
        statusNew.gridStatus[action.payload - 1].currentNum =
          status.gridStatus[blankGridId - 1].currentNum;
        statusNew.blankGridId = action.payload;
        statusNew.step++;
      }
    }
  }

  if (action.type === "START_NEW_GAME") {
    let gridStatus = {};

    var NoOne = [];
    let gridStatusInner = [];

    for (var i = 1; i < 10; ++i) {
      let ramNum = Math.ceil(Math.random() * 9);
      if (NoOne.indexOf(ramNum) === -1) {
        if (ramNum === 9) {
          gridStatusInner.push({ currentNum: null, gridID: i });
          NoOne.push(ramNum);
          gridStatus.blankGridId = i;
        } else {
          gridStatusInner.push({ currentNum: ramNum, gridID: i });
          NoOne.push(ramNum);
        }
        // NoOne.push(ramNum);
      } else {
        i--;
      }
    }
    gridStatus.gridStatus = gridStatusInner;

    gridStatus.step = 0;
    gridStatus.start = true;

    return gridStatus;
  }
  return statusNew;
};

const welcome = (name = "", action = "") => {
  if (action.type === "SHOW_NAME") {
    name = action.payload;
  }
  console.log("reducer", action);

  return name;
};

const getBreaker = (breaker = "", action = "") => {
  if (action.type === "GET_BREAKER") {
    breaker = window.localStorage.getItem("breaker");
    if (breakersLocalStorage === null) {
      breakersLocalStorage = JSON.stringify([]);
    }
  }
  return breaker;
};

export default combineReducers({
  lists: getList,
  welcome: welcome,
  gridStatusDefault: gridStatusDefault,
  getBreaker: getBreaker
});
