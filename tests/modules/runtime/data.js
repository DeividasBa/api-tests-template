let utils = require('./utils');

(function () {
  // define global data and default values - subject to change during runtime
  let data = {
    global: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODg0NDE1NTMsImlhdCI6MTU4NTg0OTU1MywibmJmIjoxNTg1ODQ5NTUzLCJpZCI6NjQ5MSwiY2lkIjo2NjM1NiwiZGV2X2lkIjoic3RyaW5nIn0.sunMU7D4ADkFYBoSj0VCtzRhXzqVIDICWldQ3gctbD4'
    },
    user: {
      address: "Gedimino 222, Vilnius, Lietuva",
      country_code_iso: "LT",
      email: "emailas@gmail.com",
      first_name: "Petras",
      last_name: "Petraitis"
    }
  };
  exports.getDefaultEmptyValue = function () {
    return null;
  };
  exports.getAll = function () {
    return data;
  };
})();
