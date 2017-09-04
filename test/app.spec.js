var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');

var expect = chai.expect;

chai.use(chaiHttp);

describe('App', function() {
  describe('Application Base URL', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, res, body) {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('responds with Hello from Docker text', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, res, body) {
          expect(res.text).to.equal('Hello from Docker!');
          done();
        });
    });
  });
});
