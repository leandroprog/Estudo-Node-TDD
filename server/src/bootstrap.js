// import dotenv from 'dotenv';

// console.log(process.env);
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
