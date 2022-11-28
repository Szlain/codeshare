'use strict';
console.log('Loading hello world function');
 
exports.handler = async (event) => {
    const responseBody = {
      userID: '01189998819991197253'
    }

    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};