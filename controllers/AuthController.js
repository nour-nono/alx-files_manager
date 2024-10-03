import { v4 as uuidv4 } from 'uuid';
import { ObjectId } from 'mongodb';
import dbClient from '../utils/db';
import redisClient from '../utils/redis';
import { hashPassword } from './UsersController';

class AuthController {}

const authController = new AuthController();
export default authController;