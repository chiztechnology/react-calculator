// const operate = require('./operate');

import operate from "./operate";

test('adds 10 + 2 to equal 12', () => {
    expect(operate(10, 2,'+')).toBe("12");
  });

  test('adds 10 - 2 to equal 10', () => {
    expect(operate(10, 2,'-')).toBe("8");
  });

  test('adds 10 * 2 to equal 20', () => {
    expect(operate(10, 2,'+')).toBe("12");
  });
