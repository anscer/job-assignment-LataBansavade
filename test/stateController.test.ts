import { expect } from 'chai';
import request from 'supertest';
import app from '../server/app';
import State from '../server/models/State';

describe('State Controller', () => {
  before(async () => {
    await State.deleteMany({});
  });

  it('should create a state', async () => {
    const res = await request(app)
      .post('/api/states')
      .send({
        name: 'Test State',
        description: 'A state for testing',
        status: 'active',
        createdBy: 'testUser'
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('_id');
    expect(res.body.name).to.equal('Test State');
  });

  it('should get all states', async () => {
    const res = await request(app).get('/api/states');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  // Add more tests for updating and deleting states
});
