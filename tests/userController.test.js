const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/mydatabase_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  await User.deleteMany({});
});

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'John Doe', email: 'john@example.com', age: 30 });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('John Doe');
  });

  it('should return validation error for invalid data', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: '', email: 'invalid-email', age: -1 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return error for duplicate email', async () => {
    await request(app)
      .post('/api/users')
      .send({ name: 'John Doe', email: 'john@example.com', age: 30 });

    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Jane Doe', email: 'john@example.com', age: 25 });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Email already exists');
  });
});