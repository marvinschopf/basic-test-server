const express = require("express");

const PORT = process.env.PORT || 3000;

const server = express();

server.all("/*", (req, res) => {
	res.send("It works!");
});

server.listen(PORT, () => {
	console.log("Server running on port " + PORT + ".");	
});
