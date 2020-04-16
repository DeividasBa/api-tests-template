let settings = require('../runtime/settings');
let chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);


(function () {
  let env = settings.environment;
  let data = settings.runtimeData;

  /**
  * get deals request.
  */
  exports.get = async function (query) {
    query = query;
    return await chai.request(env.urlApi)
      .get(`/mth/v1/users/deals${query}`)
      .set('content-type', 'application/json')
      .set('Authorization', data.global.Authorization)
      .send();
  };
})();
