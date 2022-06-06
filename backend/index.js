// const Joi = require("joi");
const express = require("express");
const app = express();
const cors = require("cors");

const artists = require("./Routes/artists");
const locations = require("./Routes/locations");
const studios = require("./Routes/studios");

app.use(cors());
app.use(express.json());

app.use("/artists", artists);
app.use("/studios", studios);
app.use("/locations", locations);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`"Listening on port ${port}..."`);
});

// const courses = [
//   { id: 1, name: "course1" },
//   { id: 2, name: "course2" },
//   { id: 3, name: "course3" },
// ];
// app.get("/", (req, res) => {
//   res.send(["Hello World"]);
// });

// app.get("/api/courses", (req, res) => {
//   res.send(courses);
// });

// app.get("/api/courses/:id", (req, res) => {
//   const course = courses.find((x) => x.id === parseInt(req.params.id));
//   if (!course) {
//     // 404 not found
//     return res.status(404).send("The course with the given ID was not found.");
//   }
//   res.send(course);
// });

// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send([req.params, req.query]);
// });

// app.post("/api/courses", (req, res) => {
//   const { error } = validateCourse(req.body);

//   if (error) {
//     // 400 bad request
//     return res.status(400).send(error.details[0].message);
//   }
//   const course = { id: courses.length + 1, name: req.body.name };
//   courses.push(course);
//   res.send(course);
// });

// app.put("/api/courses/:id", (req, res) => {
//   const course = courses.find((x) => x.id === parseInt(req.params.id));
//   if (!course) {
//     return res.status(404).send("The course with the given ID was not found.");
//   }

//   const { error } = validateCourse(req.body);
//   if (error) {
//     // 400 bad request
//     res.status(400).send(error.details[0].message);
//     return;
//   }

//   course.name = req.body.name;
//   res.send(course);
// });

// app.delete("/api/courses/:id", (req, res) => {
//   const course = courses.find((x) => x.id === parseInt(req.params.id));
//   if (!course) {
//     return res.status(404).send("The course with the given ID was not found.");
//   }
//   const index = courses.indexOf(course);
//   courses.splice(index, 1);

//   res.send(course);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`"Listening on port ${port}..."`);
// });

// function validateCourse(course) {
//   const schema = {
//     name: Joi.string().min(3).required(),
//   };
//   return Joi.validate(course, schema);
// }
