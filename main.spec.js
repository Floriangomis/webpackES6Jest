import { sum, testPromise, fetchData } from './main';

// Function Called Before/After each test

beforeEach(() => {
  console.log('Before Each !');
});

afterEach(() => {
  console.log('After Each !');
});

beforeAll(() => {
  console.log('Before All !');
});

afterAll(() => {
  console.log('After All !');
});


// If you want to ONLY test this test.
// test.only('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


// The actual test

test('Fetch Data Promise', () => {
  return fetchData();
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Test Promise', () => {
  return testPromise()
    .then( (data) => {
      expect(data).toBe('test');
    });
});

// If we want to regroup test 
describe('Test sum function with different Number', () => {
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

});