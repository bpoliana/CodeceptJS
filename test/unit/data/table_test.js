const assert = require('assert');

const DataTable = require('../../../lib/data/table');

describe('DataTable', () => {
  it('should take an array for creation', () => {
    const data = ['login', 'password'];
    const dataTable = new DataTable(data);
    assert.deepEqual(dataTable.array, data);
    assert.deepEqual(dataTable.rows, []);
  });

  it('should allow arrays to be added', () => {
    const data = ['login', 'password'];
    const dataTable = new DataTable(data);
    dataTable.add(['jon', 'snow']);

    const expected = {
      login: 'jon',
      password: 'snow',
    };
    assert.equal(dataTable.rows[0].data, JSON.stringify(expected));
  });

  it('should not allow an empty array to be added', () => {
    const data = ['login', 'password'];
    const dataTable = new DataTable(data);
    assert.throws(() => dataTable.add([]));
  });

  it('should not allow an array with more slots than the original to be added', () => {
    const data = ['login', 'password'];
    const dataTable = new DataTable(data);
    assert.throws(() => dataTable.add(['Henrietta']));
  });

  it('should not allow an array with less slots than the original to be added', () => {
    const data = ['login', 'password'];
    const dataTable = new DataTable(data);
    assert.throws(() => dataTable.add(['Acid', 'Jazz', 'Singer']));
  });
});
