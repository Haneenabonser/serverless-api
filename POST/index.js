'use strict';

const uuid = require('uuid').v4;
const People = require('./schema');

exports.handler = async (event) => {
    try {
        const { name, age } = JSON.parse(event.body);
        const data = {
            id: uuid(),
            name: name,
            age: age,
        }

        const newData = new People(data);
        const savedData = await newData.save();
        return {
            status: 200,
            body: JSON.stringify(savedData),

        };
    } catch (e) {

        return {
            status: 500,
            message: e.message,

        };
    }
}