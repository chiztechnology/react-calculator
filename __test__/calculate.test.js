import calculate from '../src/logic/calculate';
import operate from '../src/logic/operate';

describe('calculate test', () => {
  const obj = { total: null, next: null, operation: '+' };
  test('should return object with null variables', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('should return object', () => {
    expect(calculate(obj, '4')).toEqual({
      next: '4',
      operation: '+',
      total: null,
    });
  });

  test('should return empty object', () => {
    expect(calculate(obj, '=')).toEqual({});
  });

  const obj2 = { total: '20', next: '8', operation: '+' };
  test('should return object where total is calculated', () => {
    expect(calculate(obj2, '=')).toEqual({
      total: operate('20', '8', '+'),
      next: null,
      operation: null,
    });
  });
});
