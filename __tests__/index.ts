import * as items from '../src';

test('should return types', () => {
  expect(typeof items.rc === 'function').toBeTruthy();
  expect(typeof items.ora === 'function').toBeTruthy();
  expect(typeof items.chalk === 'function').toBeTruthy();
  expect(typeof items.inquirer === 'object').toBeTruthy();
  expect(typeof items.commander === 'object').toBeTruthy();
  expect(typeof items.configstore === 'function').toBeTruthy();
  expect(typeof items.table === 'function').toBeTruthy();
})
