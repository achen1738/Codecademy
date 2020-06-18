const { CourseQueries, CourseMutations } = require("./CourseResolver");

const { SchemaComposer } = require("graphql-compose");
const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({ ...CourseQueries });

schemaComposer.Mutation.addFields({ ...CourseMutations });

schemaComposer.Subscription.addFields({});

module.exports = schemaComposer.buildSchema();
