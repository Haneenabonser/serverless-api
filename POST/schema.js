'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
    id: String,
    name:String,
    age:Number,
});

const People =dynamoose.model('people',peopleSchema);

module.exports=People;