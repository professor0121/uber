import amqp from "amqplib"
import { rabbitmqEnv } from '../config/env.js';

let connection;
let channel;

export const connectQueue = async () => {
    if (!connection) {
        connection = await amqp.connect(rabbitmqEnv.url);
        channel = await connection.createChannel();
    }
}

export const getChannel = () => {
    if (!channel) throw new Error("rabbit is not connected")
    return channel;
}