import mongoose from 'mongoose';
import bcrypt from "bcrypt";


const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String
});

userSchema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
};

const User= mongoose.model('User', userSchema, 'user');
export {User};