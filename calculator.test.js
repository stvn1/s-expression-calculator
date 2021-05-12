const {calculator} = require('./calculator')



test('adds 1 + 2 to equal 3', () => {
    expect(calculator('(add 1 1)')).toBe(2);
  });

test('add 1 2 3 4 (multiply 2 3 5)) to be 40', () => {
    expect(calculator('(add 1 2 3 4 (multiply 2 3 5))')).toBe(40);
  });

test('input 123 to be 123', () => {
    expect(calculator('123')).toBe(123);
  });

test('0  to be 0', () => {
    expect(calculator('0')).toBe(0);
  });

test('(add 0 (add 3 4)) to be 7', () => {
    expect(calculator('(add 0 (add 3 4))')).toBe(7);
  });

test('(add 3 (add (add 3 3) 3)) to be 12', () => {
    expect(calculator('(add 3 (add (add 3 3) 3))')).toBe(12);
  });


test('(multiply 1 1) to be 1', () => {
    expect(calculator('(multiply 1 1)')).toBe(1);
  });

test('(multiply 0 (multiply 3 4)) to be 0', () => {
    expect(calculator('(multiply 0 (multiply 3 4))')).toBe(0);
  });

test('(multiply 2 (multiply 3 4)) to be 24', () => {
    expect(calculator('(multiply 2 (multiply 3 4))')).toBe(24);
  });

test('(multiply 3 (multiply (multiply 3 3) 3)) to be 81', () => {
    expect(calculator('(multiply 3 (multiply (multiply 3 3) 3))')).toBe(81);
  });

test('(add 1 (multiply 2 3))', () => {
    expect(calculator('(add 1 (multiply 2 3))')).toBe(7);
  });

test('(multiply 2 (add (multiply 2 3) 8)) to be 28', () => {
    expect(calculator('(multiply 2 (add (multiply 2 3) 8))')).toBe(28);
  });

test('-10', () => {
    expect(calculator('-10')).toEqual(Error('Input should be a positive integer'));
  });

test('(add 1 2 3 4 (multiply 2 3 5)) to be 40', () => {
    expect(calculator('(add 1 2 3 4 (multiply 2 3 5))')).toBe(40)
  });
test('(exponent 2 5) to be 32', () => {
    expect(calculator('(exponent 2 5)')).toBe(32)
  });

test('(exponent 1 5) to be 1', () => {
    expect(calculator('(exponent 1 5)')).toBe(1)
  });

test('(exponent 3 2 3) to be 729', () => {
    expect(calculator('(exponent 3 2 3)')).toBe(729)
  });


  test('add 1(exponent 3 2 3)) to be 730', () => {
    expect(calculator('(add 1 (exponent 3 2 3))')).toBe(730)
  });
