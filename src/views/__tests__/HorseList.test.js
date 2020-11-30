import {limitedHorseList} from '../HorseList';

describe('views/HorseList', () => {
  const horseListStub = [
    {id: '0', name: 'A'},
    {id: '1', name: 'A'},
    {id: '2', name: 'A'},
    {id: '3', name: 'A'},
    {id: '4', name: 'A'}
  ];

  const horseDataSetStub = {
    '0': {id: '0', name: 'A'},
    '1': {id: '1', name: 'A'},
    '2': {id: '2', name: 'A'},
    '3': {id: '3', name: 'A'},
    '4': {id: '4', name: 'A'}
  };

  describe('limitedHorseList()', () => {
    test('should return a list with limited size', () => {
      const horseList = limitedHorseList(horseListStub, 2).length;

      expect(horseList).toBe(2);
    });

    test('should convert object dataset to be array type', () => {
      const horseList = limitedHorseList(horseDataSetStub, 2);

      expect(typeof horseDataSetStub).toBe('object');
      expect(Array.isArray(horseList)).toBe(true);
      expect(horseList.length).toBe(2);
    });
  });
});
