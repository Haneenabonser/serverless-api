'use strict';

const Poeple = require('./schema');

exports.handler = async (event) => {
    try {
        const id = event?.pathParameters?.id;

        let data = await Poeple.delete({ id });
        let obj = {};

        return {
            statusCode: 200,
            body: JSON.stringify(obj),
        };
    } catch (e) {
        return {
            status: 500,
            message: e.message,
        };
    }
};