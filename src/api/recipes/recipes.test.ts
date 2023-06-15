import request from "supertest";
import { Recipes } from "./models/recipes.model";

import app from "../../app";
beforeAll(async () => {
  try {
    await Recipes.drop();
  } catch (error) {
    console.log(error);
  }
});
describe("GET /api/v1", () => {
  it("responds with a json message", async () =>
    request(app)
      .get("/api/v1/recipes")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty("length");
      }));
});
