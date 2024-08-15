const express= require('express');
const app =express();

const userModel=require('./usermodel'); // import the user model

// Create
app.get('/create',async (req,res)=>{
  let createduser=await userModel.create({
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
  })
  res.send(createduser);
  
})
// app.listen(3000);


// Update
app.get('/update',async (req,res)=>{
  let updateduser = await userModel.findOneAndUpdate({name: "John Doe"},{name: "Hari"} , {new: true})

  res.send(updateduser);
});

// Read
app.get('/read',async (req,res)=>{
  let users = await userModel.find();
  res.send(users);
});

// Delete
app.get('/delete',async (req,res)=>{
  let users = await userModel.findOneAndDelete({name: 'Hari'});
  res.send(users);
});


app.listen(3000);


