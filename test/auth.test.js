import * as chai from 'chai';
import {default as chaiHttp, request} from "chai-http";
import app from '../app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Auth Validation API', () => {
  describe('POST /auth/validate-username', () => {
    it('should return true for a valid username', () => {
      return request.execute(app)
        .post('/auth/validate-username')
        .send({ username: 'test_user' })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body.isValid).to.be.true;
        });
    });

    it('should return false for an invalid username', () => {
      return request.execute(app)
        .post('/auth/validate-username')
        .send({ username: '!!' })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body.isValid).to.be.false;
        });
    });
  });

  describe('POST /auth/validate-password', () => {
    it('should return true for a valid password', () => {
      return request.execute(app)
        .post('/auth/validate-password')
        .send({ password: 'secure123' })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body.isValid).to.be.true;
        });
    });

    it('should return false for a short password', () => {
      return request.execute(app)
        .post('/auth/validate-password')
        .send({ password: '123' })
        .then(res => {
          expect(res).to.have.status(200);
          expect(res.body.isValid).to.be.false;
        });
    });
  });
});
