require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://localhost/orders',
    rabbitMQURI: 'amqp://rabbitmq:5672',
    rabbitMQQueue: 'orders',
    port: 3002
};

// require('dotenv').config();

// console.log('🔍 DEBUG Environment Variables:');
// console.log('RABBITMQ_URI:', process.env.RABBITMQ_URI);
// console.log('MONGODB_ORDER_URI:', process.env.MONGODB_ORDER_URI);
// console.log('PORT:', process.env.PORT);

// module.exports = {
//     mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://localhost/orders',
//     rabbitMQURI: process.env.RABBITMQ_URI || 'amqp://rabbitmq:5672',
//     rabbitMQQueue: 'orders',
//     port: process.env.PORT || 3002
// };