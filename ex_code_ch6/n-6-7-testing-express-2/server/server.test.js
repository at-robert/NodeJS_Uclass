const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
});

// Make a new test
// assert 200
// Assert that you exist in users array
it('should return my user object', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Andrew',
        age: 25
      });
    })
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'robert',
        age: 25
      });
    })
    .end(done);
});
