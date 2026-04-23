const app = require('./app');

const port = 3000;

app.listen(port, "0.0.0.0", () => {
  console.log("Listening on port 3000");
  console.log("http://10.0.2.2:3000");
  
});