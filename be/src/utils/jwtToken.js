import jwt from 'jsonwebtoken';
import { jwtEnv } from '../config/env.js';

const signToken = async (paylod) => {
    return jwt.sign(paylod, jwtEnv.secret, {
        expiresIn: jwtEnv.expire
    })
}

const verifyToken = async (token) => {
    return jwt.verify(token, jwtEnv.secret);
}

export { signToken, verifyToken }