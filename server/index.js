const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

//*Development for conection with react port 3000 and 5000 server port.
var cors = require("cors");
app.use(cors());
//

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
