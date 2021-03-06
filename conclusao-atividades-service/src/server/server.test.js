const { test, expect } = require("@jest/globals");
const server = require("./server");
const request = require("supertest");
require("dotenv/config");

const apiMock = jest.fn((app, repository) => {
  app.get("/error", (req, res, next) => {
    throw new Error("Mock Error");
  });
});

test("Server Start", async () => {
  const app = await server.start(apiMock);
  expect(app).toBeTruthy();
  await server.stop();
});

test("Health Check", async () => {
  process.env.PORT = 9001;
  const app = await server.start(apiMock);
  const response = await request(app).get("/health");
  expect(response.status).toEqual(200);
  await server.stop();
});

test("Error Check", async () => {
  process.env.PORT = 9002;
  const app = await server.start(apiMock);
  const response = await request(app).get("/error");
  expect(response.status).toEqual(500);
});

test("Server Stop", async () => {
  const isStopped = await server.stop();
  expect(isStopped).toBeTruthy();
});
