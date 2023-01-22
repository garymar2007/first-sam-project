
import moment from 'moment';

export const clock = async (event) => {
    console.log('Clock function run!');

    const message = moment().format;

    const response = {
        statusCode: 200,
            body: JSON.stringify(message)
    };
    return response;
    // try {
    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify({
    //             message: 'hello world',
    //         }),
    //     };
    // } catch (err) {
    //     console.log(err);
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify({
    //             message: 'some error happened',
    //         }),
    //     };
    // }
};