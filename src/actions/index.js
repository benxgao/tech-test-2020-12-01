export const GET_HORSE_LIST = 'GET_HORSE_LIST'
export const RECEIVE_HORSE_LIST = 'RECEIVE_HORSE_LIST'

export function loadHorses() {
  return {
    type: GET_HORSE_LIST,
  }
};

export function receiveHorses(horses) {
  return {
    type: RECEIVE_HORSE_LIST,
    payload: horses,
  }
};
