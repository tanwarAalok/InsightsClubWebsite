const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

app.use(express.json());
const allowedOrigins = ["https://insights-club-vitb.vercel.app", "http://localhost:3000", "https://insights-club-vitb.onrender.com"];
app.use(
	cors({
		origin: function (origin, callback) {
			// allow requests with no origin (like mobile apps or curl requests)
			if (!origin) return callback(null, true);

			// allow whitelisted origins
			if (allowedOrigins.indexOf(origin) === -1)
				return callback(
					new Error(
						"The CORS policy for this site does not allow access from the specified Origin."
					),
					false
				);

			// else
			return callback(null, true);
		},
		credentials: true,
	}));
app.set("trust proxy", 1);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

//route imports
const routes = require("./routes/index.js");
app.use("/", routes);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
