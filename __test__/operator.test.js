import operate from '../src/logic/operate';

describe('Calculator action', () => {
  test('summation', () => {
    expect(operate(5, 2, '+')).toEqual('7');
  });
  test('subtracting', () => {
    expect(operate(7, 5, '-')).toEqual('2');
  });
  test('multiplication', () => {
    expect(operate(2, 4, 'x')).toEqual('8');
  });
  test('division', () => {
    expect(operate(8, 4, '÷')).toEqual('2');
  });
  test('modulus', () => {
    expect(operate(10, 5, '%')).toEqual('0');
  });
});
