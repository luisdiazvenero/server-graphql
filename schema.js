const { makeSchemaExecutable } = require('graphql-tools')

const schema = `
  type Curso {
    id: ID!
    titulo: String!
  }
`

const schema = makeSchemaExecutable({
  typeDefs: schema
})

module.exports = schema
