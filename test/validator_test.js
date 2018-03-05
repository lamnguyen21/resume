const assert = require('assert');
const {validateInput, ValidationError} = require('../utils/validator');

describe('Validator', function() {
  describe('#validateInput', function() {
    var resume;
    beforeEach('save resume', function() {
      resume = {
        name: "test",
        jobTitle: "Software developer",
        jobDesc: "developing Software applications",
        curCompany: "abc"
      };
    });

    it('should return error if name is missing', function() {
      resume.name = '';
      const error = validateInput(resume);

      assert.ok(error);
      assert.equal(-5, error.message);
    });

    it('should return error if job title is missing', function() {
      resume.jobTitle = '';
      const error = validateInput(resume);

      assert.ok(error);
      assert.equal(-6, error.message);
    });

    it('should return error if job description is missing', function() {
      resume.jobDesc = '';
      const error = validateInput(resume);

      assert.ok(error);
      assert.equal(-7, error.message);
    });

    it('should return error if current company is missing', function() {
      resume.curCompany = '';
      const error = validateInput(resume);

      assert.ok(error);
      assert.equal(-8, error.message);
    });

    it('should return error if resume is not provided', function() {
      const error = validateInput(null);

      assert.ok(error);
      assert.equal(-4, error.message);
    });

    it('should return null if input is valid', function() {
      const error = validateInput(resume);
      assert.ok(!error);
    });
  });
});
