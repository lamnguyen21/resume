const assert = require('assert');
const dataStore = require('../utils/datastore').dataStore;

describe('Datastore', function() {
  const resume = {
    name: "test",
    jobTitle: "Software developer",
    jobDesc: "developing Software applications",
    curCompany: "abc"
  };

  describe('#save()', function() {
    it('should return a value when input is valid', function() {
      const id = dataStore.save(resume);
      assert.ok(id);
    });

    it('should return null when input is invalid', function() {
      assert.ok(!dataStore.save(null));
    });

    it('should return the same id for identical inputs', function() {
      const resume2 = Object.assign({}, resume);

      assert.equal(dataStore.save(resume2), dataStore.save(resume));
    });
  });

  describe('#find', function() {
    var id;
    beforeEach('save resume', function() {
      id = dataStore.save(resume);
    });

    it('should return a resume if the provided id exists', function() {
      const result = dataStore.find(id);
      assert.equal(resume.name, result.name);
      assert.equal(resume.jobTitle, result.jobTitle);
      assert.equal(resume.jobDesc, result.jobDesc);
      assert.equal(resume.curCompany, result.curCompany);
    });

    it('should return null if the provided id does not exist', function() {
      assert.ok(!dataStore.find("unexisting id"));
    });
  });
});
