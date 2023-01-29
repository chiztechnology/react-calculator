import operate from '../src/logic/operate';

describe('Calculator action', () => {
  test('add operation 5 + 2 returns 7', () => {
    expect(operate(5, 2, '+')).toEqual('7');
  });
  test('subtract operation 7 - 5 returns 2', () => {
    expect(operate(7, 5, '-')).toEqual('2');
  });
  test('multiply operation 2 x 4 returns 8', () => {
    expect(operate(2, 4, 'x')).toEqual('8');
  });
  test('divide operation 8 / 4 returns 2', () => {
    expect(operate(8, 4, '÷')).toEqual('2');
  });
  test('module operation 10 % 5 returns 0', () => {
    expect(operate(10, 5, '%')).toEqual('0');
  });
});
