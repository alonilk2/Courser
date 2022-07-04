var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
const db = require("./models/index.js");
const exjwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const crypto = require("crypto");
const port = 5000;

var app = express();

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');*/

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use(express.static("public"));

const jwtMW = exjwt({
  secret: "manyplacees are awsome 4now",
  algorithms: ["RS256"],
});

app.post("/signin", async (req, res) => {
  try {
    const user = await db.users.findOne({
      where: { email: req.body.email },
    });
    await bcrypt.compare(
      req.body.password,
      user.dataValues.password,
      async function (err, result) {
        if (result == true) {
          let tok = jwt.sign({ user }, "manyplacees are awsome 4now", {
            expiresIn: 129600,
          });
          res.json({
            success: true,
            error: null,
            user: user,
            tok,
          });
        } else
          res.json({
            success: false,
            error: 0,
          }); // 0 Means user not found.
      }
    );
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req);

    if (req.body) {
      await bcrypt.hash(
        req.body.password,
        saltRounds,
        async function (err, hash) {
          token = crypto.randomBytes(32).toString("hex");
          await bcrypt.hash(token, saltRounds, async function (err, hashtok) {
            if (req.body.promo) {
              const promo = await db.PromoCode.findOne({
                where: { promocode: req.body.promo },
              });
              if (!promo)
                res.json({
                  success: false,
                  error: 3, // 3 Means promocode wasnt found
                });
            }
            const [user, created] = await db.users.findOrCreate({
              where: { email: req.body.email },
              defaults: {
                email: req.body.email,
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                password: hash,
                active: 0,
                token: hashtok,
                admin: false,
                idnumber: req.body.ID
              },
            });
            if (created) {
              res.json({
                success: true,
                error: null,
                user: user,
              });
            } else
              res.json({
                success: false,
                error: 0, // 0 Means user already registered.
              });
          });
        }
      );
    } else
      res.json({
        success: false,
        error: 1, // 1 Means no request body
      });
  } catch (err) {
    res.json({
      success: false,
      error: err,
    });
  }
});

app.post("/course", async (req, res) => {
  try {
    const [course, created] = await db.course.findOrCreate({
      where: { name: req.body.name },
      defaults: {
        name: req.body.name,
        userId: req.body.teacher,
      },
    });
    res.json({
      success: true,
      course: course,
    });
  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      error: error,
    });
  }
});

app.get("/course/:id", async (req, res) => {
  try {
    const courseList = await db.course.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json({
      success: true,
      course: courseList,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.delete("/course/:id", async (req, res) => {
  try {
    const course = await db.course.findOne({
      where: {
        id: req.params.id,
      },
    });
    await course.destroy();
    res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.post("/grade", async (req, res) => {
  try {
    const student = await db.students.findOne({
      where: {
        idnumber: req.body.id,
      },
    });

    if (student) {
      const grade = await db.grades.create({
        grade: req.body.grade,
        studentId: student.dataValues.id,
        courseId: req.body.courseId,
      });

      const grades = await db.grades.findAll({
        where: {
          courseId: req.body.courseId,
        },
        include: [
          {
            model: db.students,
          },
        ],
      });

      return res.json({
        success: true,
        grade: grades,
      });
    }
    return res.json({
      success: false,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error,
    });
  }
});

app.get("/grade/:id", async (req, res) => {
  try {
    const gradesList = await db.grades.findAll({
      where: {
        courseId: req.params.id,
      },
      include: [
        {
          model: db.students,
        },
      ],
    });
    console.log(gradesList);
    res.json({
      success: true,
      grades: gradesList,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.delete("/grade/:id", async (req, res) => {
  try {
    const grade = await db.grades.findOne({
      where: {
        id: req.params.id,
      },
    });
    await grade.destroy();
    res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = await db.tasks.create({
      name: req.body.name,
      courseId: req.body.courseId,
      filename: req.body.file,
    });

    const tasks = await db.tasks.findAll({
      where: {
        courseId: req.body.courseId,
      },
    });

    return res.json({
      success: true,
      tasks: tasks,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const tasksList = await db.tasks.findAll({
      where: {
        courseId: req.params.id,
      },
    });
    res.json({
      success: true,
      tasks: tasksList,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await db.tasks.findOne({
      where: {
        id: req.params.id,
      },
    });
    await task.destroy();
    res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.post("/student", async (req, res) => {
  try {
    const student = await db.students.create({
      name: req.body.name,
      idnumber: req.body.id,
    });
    const course = await db.course.findOne({
      where: {
        id: req.body.courseId,
      },
    });
    student.addCourse(course);
    res.json({
      success: true,
      student: student,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error,
    });
  }
});

app.get("/student/:id", async (req, res) => {
  try {
    const studentsList = await db.students.findAll({
      include: [
        {
          model: db.course,
          where: {
            id: req.params.id,
          },
        },
      ],
    });
    res.json({
      success: true,
      students: studentsList,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.delete("/student/:id", async (req, res) => {
  try {
    const student = await db.students.findOne({
      where: {
        id: req.params.id,
      },
    });
    await student.destroy();
    res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
