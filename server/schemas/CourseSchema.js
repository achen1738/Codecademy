const mongoose = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  id: Number,
  slug: String,
  title: String,
  image: String,
  description: String,
  author_id: String,
  tags: [String],
  pro: Boolean,
});

const Courses = mongoose.model("courses", CourseSchema);

module.exports = {
  Courses,
  CoursesTC: composeWithMongoose(Courses),
};
