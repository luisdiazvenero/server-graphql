const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('graphql-server-express');
const schema = require(./schema);
const app = express()

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema })
)

const PORT = 5678
app.listen(PORT, () => {
  console.log('Servidor corriendo OK')
})
