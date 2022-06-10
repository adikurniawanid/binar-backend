// seeding data terlebih dahulu

const jsonwebtoken = require("jsonwebtoken");
const request = require("supertest");
const app = require("../src/app");
const config = require("../src/config/jwt.config");

const token = jsonwebtoken.sign(
  {
    publicId: "9e50ab39-8f99-4333-b2b4-8b6344bd23b6",
    username: "admin",
  },
  config.JWT_SECRET_KEY
);

const wrongToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6ImFhOGJjNWMyLWFhY2ItNDU1ZC1iYjUyLTNlNWFlZjBiNzVmMyIsInVzZXJuYW1lIjoiUm9iaW5HcmFudFNyLjY4IiwiaWF0IjoxNjUyNDQxNzYwfQ.sH1vzmS7exHBv7ztUPrMbNx_1ru55Pw2at2cfylNTvc";

describe("GET Users", () => {
  it("Success", (done) => {
    request(app)
      .get("/users")
      .set("authorization", token)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty("data");
          expect(Array.isArray(res.body.data)).toBe(true);
          done();
        }
      });
  });

  it("No Auth", (done) => {
    request(app)
      .get("/users")
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized");
          done();
        }
      });
  });

  it("Invalid Token", (done) => {
    request(app)
      .get("/todos")
      .set("authorization", wrongToken)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized User");
          done();
        }
      });
  });
});

describe("GET Users by ID", () => {
  it("Success", (done) => {
    request(app)
      .get("/Users/9e50ab39-8f99-4333-b2b4-8b6344bd23b6")
      .set("authorization", token)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty("data");
          expect(res.body.data).toHaveProperty("publicId");
          expect(res.body.data).toHaveProperty("username");
          expect(res.body.data).toHaveProperty("name");
          expect(res.body.data).toHaveProperty("age");
          expect(res.body.data.publicId).toBe(
            "9e50ab39-8f99-4333-b2b4-8b6344bd23b6"
          );
          expect(res.body.data.username).toBe("admin");
          done();
        }
      });
  });

  it("No auth", (done) => {
    request(app)
      .get("/Users/9e50ab39-8f99-4333-b2b4-8b6344bd23b6")
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized");
          done();
        }
      });
  });

  it("Invalid token", (done) => {
    request(app)
      .get("/Users/9e50ab39-8f99-4333-b2b4-8b6344bd23b6")
      .set("authorization", wrongToken)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized User");
          done();
        }
      });
  });

  it("Not found", (done) => {
    request(app)
      .get("/Users/4fe2b5c0-7bad-4db3-93d9-afd5e6ce792a")
      .set("authorization", token)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(404);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("User not found");
          done();
        }
      });
  });
});

describe("POST Users", () => {
  it("Success", (done) => {
    request(app)
      .post("/users")
      .set("authorization", token)
      .send({
        username: "akdev",
        password: "akdev",
        name: "Adi Kurniawan",
        age: 22,
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Success add user");
          done();
        }
      });
  });

  it("No Auth", (done) => {
    request(app)
      .post("/users")
      .send({
        username: "akdevid",
        password: "akdevid",
        name: "Adi Kurniawan",
        age: 22,
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized");
          done();
        }
      });
  });

  it("Invalid Auth Token", (done) => {
    request(app)
      .post("/users")
      .set("authorization", wrongToken)
      .send({
        username: "akdevid",
        password: "akdevid",
        name: "Adi Kurniawan",
        age: 22,
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized User");
          done();
        }
      });
  });

  it("Required field violation", (done) => {
    request(app)
      .post("/users")
      .set("authorization", token)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(422);
          expect(res.body).toHaveProperty("errors");
          expect(Array.isArray(res.body.errors)).toBe(true);
          done();
        }
      });
  });

  it("Duplicate username violation", (done) => {
    request(app)
      .post("/users")
      .set("authorization", token)
      .send({
        username: "akdev",
        password: "akdev",
        name: "Adi Kurniawan",
        age: 22,
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(422);
          expect(res.body).toHaveProperty("errors");
          expect(Array.isArray(res.body.errors)).toBe(true);
          done();
        }
      });
  });
});

describe("PUT Users", () => {
  it("Success", (done) => {
    request(app)
      .put("/users/9e50ab39-8f99-4333-b2b4-8b6344bd23b6")
      .set("authorization", token)
      .send({
        name: "Adi ggwpbgt",
        age: "18",
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Success update user");
          done();
        }
      });
  });

  it("No Auth", (done) => {
    request(app)
      .put("/users/9e50ab39-8f99-4333-b2b4-8b6344bd23b6")
      .send({
        name: "Adi ggwpbgt",
        age: "18",
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized");
          done();
        }
      });
  });

  it("Invalid Auth Token", (done) => {
    request(app)
      .put("/users/9e50ab39-8f99-4333-b2b4-8b6344bd23b6")
      .set("authorization", wrongToken)
      .send({
        username: "akdevid",
        password: "akdevid",
        name: "Adi Kurniawan",
        age: 22,
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized User");
          done();
        }
      });
  });

  it("Not found", (done) => {
    request(app)
      .put("/Users/4fe2b5c0-7bad-4db3-93d9-afd5e6ce792a")
      .set("authorization", token)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(404);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("User not found");
          done();
        }
      });
  });

  it("Age field violation", (done) => {
    request(app)
      .put("/users/9e50ab39-8f99-4333-b2b4-8b6344bd23b6")
      .set("authorization", token)
      .send({
        name: "Adi ggwp",
        age: "18a",
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(422);
          expect(res.body).toHaveProperty("errors");
          expect(Array.isArray(res.body.errors)).toBe(true);
          done();
        }
      });
  });
});

describe("DELETE Users", () => {
  it("No Auth", (done) => {
    request(app)
      .delete("/users/431fbbdc-f2a1-4484-8f5a-596030f9ed8b")
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized");
          done();
        }
      });
  });

  it("Invalid Auth Token", (done) => {
    request(app)
      .delete("/users/431fbbdc-f2a1-4484-8f5a-596030f9ed8b")
      .set("authorization", wrongToken)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("Unauthorized User");
          done();
        }
      });
  });

  it("Not found", (done) => {
    request(app)
      .delete("/Users/8188995d-3b8d-4381-9981-59ace6fb7f61")
      .set("authorization", token)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.status).toBe(404);
          expect(res.body).toHaveProperty("message");
          expect(res.body.message).toBe("User not found");
          done();
        }
      });
  });
});
