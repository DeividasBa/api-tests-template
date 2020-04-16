let utils = require('../runtime/utils');
let settings = require('../runtime/settings');
let chai = require('chai'), chaiHttp = require('chai-http');
let expect = settings.expect;
chai.use(chaiHttp);


(function () {
  let env = settings.environment;
  let data = settings.runtimeData;

  /**
  * get user by phone number requeste.
  */
  exports.get = async function (code, phone) {
    return await chai.request(env.urlApi)
      .get(`/mth/v1/users/phone/${code}/${phone}`)
      .set('content-type', 'application/json')
      .set('Authorization', data.global.Authorization)
      .send();
  };

/**
* put request example.
*/
exports.put = async function () {
  return await chai.request(env.urlApi)
    .put('/mth/v1/users/profile')
    .set('Content-Type', 'application/json')
    .set('Authorization', data.global.Authorization)
    .send(
      {
          address: data.user.address,
          country_code_iso: data.user.country_code_iso,
          email: data.user.email,
          first_name: data.user.first_name,
          last_name: data.user.last_name
      }
    );
};

})();