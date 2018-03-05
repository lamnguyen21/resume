const md5 = require('md5');

function generateID(input) {
  return md5(input);
}

function JSONDataStore() {
  this.data = {};

  this.save = (json) => {
    if (!json) {
      return null;
    }

    const id = generateID(JSON.stringify(json));
    this.data[id] = json;

    return id;
  };

  this.find = (id) => {
    return this.data[id];
  }
}

module.exports = {
  dataStore: new JSONDataStore()
};
