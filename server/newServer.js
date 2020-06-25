require("dotenv").config();
const express = require("express");
const expressGraphQL = require("express-graphql");
require("./db.js");
const port = 5000;
const app = express();
const bodyParser = require("body-parser");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
  GraphQLSchema,
} = require("graphql");
const { CoursesTC, Courses } = require("./schemas/CourseSchema.js");
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();
app.use(urlencodedParser);
app.use(jsonParser);

const CourseType = new GraphQLObjectType({
  name: "Course",
  description: "This represents the a courrse",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    slug: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    author_id: { type: GraphQLNonNull(GraphQLString) },
    tags: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
    pro: { type: GraphQLNonNull(GraphQLBoolean) },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    getCourses: {
      type: GraphQLList(CourseType),
      description: "Retrieves all courses",
      resolve: async (_, __) => {
        return await Courses.find({});
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root mutation",
  fields: () => ({
    addCourse: {
      type: CourseType,
      description: "Adds a course",
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
      resolve: async (_, args) => {
        const course = ({ slug, title, image, description, author_id, tags, pro } = args);
        return await Courses.create(course);
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen({ port }, () => console.log(`Server ready at http://localhost:${port}/graphql`));

console.log(`Server running on port ${port}`);
