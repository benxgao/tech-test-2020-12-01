import fetch from 'isomorphic-fetch';
import {API_GET_HORSE_LIST} from '../constants';

export const horsesApi = {
  getHorseList: async () => {
    const horseList = await fetch(API_GET_HORSE_LIST).then(response => response.json());
    return horseList;
  },
};
