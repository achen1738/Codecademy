require("dotenv").config();

const { CoursesTC, Courses } = require("../schemas/CourseSchema.js");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = require("graphql");

const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    slug: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    author_id: { type: GraphQLNonNull(GraphQLString) },
    tags: { type: [GraphQLNonNull(GraphQLString)] },
    pro: { type: GraphQLNonNull(GraphQLBoolean) },
  }),
});

CoursesTC.addResolver({
  name: "getCourse",
  descriont: "Gets a course based on its slug",
  type: CoursesTC,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async ({ source, args, context, info }) => {
    const { id } = args;
    const foundCourse = await Courses.find({ id }).limit(1);
    return foundCourse[0];
  },
});

CoursesTC.addResolver({
  name: "addCourse",
  descriont: "Adds a course object to the courses collection",
  type: CoursesTC,
  args: {
    id: { type: GraphQLInt },
    slug: { type: GraphQLString },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    description: { type: GraphQLString },
    author_id: { type: GraphQLString },
    tags: { type: GraphQLList(GraphQLString) },
    pro: { type: GraphQLBoolean },
  },
  resolve: async ({ source, args, context, info }) => {
    const course = ({ slug, title, image, description, author_id, tags, pro } = args);

    return await Courses.create(course);
  },
});

module.exports = {
  CourseQueries: {
    getCourse: CoursesTC.getResolver("getCourse"),
  },
  CourseMutations: {
    addCourse: CoursesTC.getResolver("addCourse"),
  },
};
