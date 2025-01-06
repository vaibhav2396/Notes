import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import { UserModel, NotesModel } from './db.js';
import jwt from 'jsonwebtoken';
import { auth } from './middleware/auth.js';
import bcrypt from 'bcrypt';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_CONNECTION_STRING)

app.use(cors());
app.use(express.json());

app.post('/sign-in',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await UserModel.findOne({
        email,
    });

    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid){
        return res.status(401).json({
            message: "Incorrect Password"
        })
    }
    
    const token = jwt.sign({
        id: user._id.toString()
    }, process.env.JWT_SECRET)

    res.json({
        token
    })

})

app.post('/sign-up',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name

    const existingUser = await UserModel.findOne({
        email
    })

    if (existingUser){
        return res.status(409).json({
            message: "User already exist"
        })
    }

    const saltRounds = Number(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await UserModel.create({
        email,
        password: hashedPassword,
        name
    })

    if (!user){
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

    res.json({
        message: "Sign Up Complete"
    })
})

app.post('/notes',auth, async (req,res) =>{
    const title = req.body.title;
    const content = req.body.content;
    const author = req.userId;

    const note = await NotesModel.create({
      title,
      content,
      author,
      createdAt: Date.now()
    })

    if(!note){
        return res.status(500).json({
            message: "Internal server error"
        })
    }

    res.json({
        message: "New Note Created"
    })

})

app.get('/notes', auth, async (req, res)=>{
    const author = req.userId;

    const notes = await NotesModel.find({
        author
    })

    res.json({
        notes
    })
})

app.listen(PORT,()=>{
    console.log("Backend is UP on PORT: "+PORT);
})