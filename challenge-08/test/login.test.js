// seeding data terlebih dahulu

const request = require("supertest");
// const { sequelize } = require("../src/api/models/index");
// const { faker } = require("@faker-js/faker");
// const { hashPassword, generateUUID } = require("../src/api/helpers");
// const { queryInterface } = sequelize;
const app = require("../src/app");

// beforeEach(async () => {
//   await queryInterface.bulkInsert("UserGames", [
//     {
//       publicId: await generateUUID(),
//       username: "admin",
//       password: await hashPassword("admin"),
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//   ]);
// });

// beforeEach(async () => {
//   await queryInterface.bulkInsert("UserGames", [
//     {
//       publicId: await generateUUID(),
//       username: "admin",
//       password: await hashPassword("admin"),
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     },
//   ]);
// });

describe("Login API", () => {
  it("Success", (done) => {
    request(app)
      .post("/login")
      .send({
        username: "admin",
        password: "admin",
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty("data");
          expect(res.body.data).toHaveProperty("token");
          done();
        }
      });
  });

  it("Wrong password", (done) => {
    request(app)
      .post("/login")
      .send({
        username: "admin",
        password: "admin21",
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Invalid username or password");
          done();
        }
      });
  });

  it("Wrong username", (done) => {
    request(app)
      .post("/login")
      .send({
        username: "admin21",
        password: "admin",
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Invalid username or password");
          done();
        }
      });
  });
});
