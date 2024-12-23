import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});

const Notes = new Schema({
    title: String,
    content: String,
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
});

const UserModel = mongoose.model('users', User)
const NotesModel = mongoose.model('notes', Notes)

export { UserModel, NotesModel };


