export const GET_HORSE_LIST = 'GET_HORSE_LIST'
export const RECEIVE_HORSE_LIST = 'RECEIVE_HORSE_LIST'

export function loadUserPage() {
  return {
    type: GET_HORSE_LIST,
  }
};

export function receiveUsers(horseList) {
  return {
    type: RECEIVE_HORSE_LIST,
    payload: horseList,
  }
};
