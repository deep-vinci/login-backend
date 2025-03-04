require('dotenv').config();
const path = require("path");

const express = require("express");
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

const port = process.env.PORT || 3000;

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // For URL-encoded form data
app.use(express.json()); // For JSON data (if applicable)

app.use("/", require("./routes/app"));
app.use('/demo', require('./routes/demo'));
app.use('/signup', require('./routes/signup'));
app.use('/signin', require('./routes/signin'));

// auth providers
app.use('/auth/google/callback', require('./routes/auth/google'));
app.use('/auth/discord/callback', require('./routes/auth/discord'));

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})