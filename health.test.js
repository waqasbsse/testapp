const request = require("supertest");
const app = require("./index");
 
test("GET /healthz returns ok", async () => {
  const res = await request(app).get("/healthz");
  expect(res.status).toBe(200);
  expect(res.text).toBe("ok");
});
