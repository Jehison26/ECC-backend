const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/index.js');
const userRoutes = require('./routes/users.js');

// routes
app.use(routes);
app.use(userRoutes);

app.listen(port, () => {
  console.log("corriendo en puerto"+{port}.port)
})





