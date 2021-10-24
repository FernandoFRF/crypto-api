const PORT = 3333;

const express = require('express');

const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
