'use strict';

const People = require('./schema');

exports.handler = async (event) => {

    try {
        const id = event?.pathParameters?.id;
        const { name, age } = JSON.parse(event.body);

        let data = await People.update(
            { id },
            { name, age }
        );

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (e) {
        return {
            status: 500,
            message: e.message,
        };
    }
};