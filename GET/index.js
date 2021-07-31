'use strict';

const People = require('./schema');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let data;
    if (id) {
      results  = await People.query('id').eq(id).exec();
      data = results [0];
    } else {
      data = await People.scan().exec();
    }

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