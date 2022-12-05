const express = require('express')
const router = express.Router();
const User = require('./model/userSchema')

router.get('/', (req, res) => {
    res.send('Homepage');
  })

router.post('/register', async(req,res)=>{
        const{name, email,phone,work,password,cpassword} = req.body;

        if(!name || !email ||!phone || !work||!password||!cpassword){
            return res.status(422).json({error:"Kindly fill all fields"})
        }
        // console.log(req.body);  //fetches everything written in textboxes
        // res.json({message: req.body});
       
        try{

          const userExist= await  User.findOne({email:email})  //check for already exiting emails
          if(userExist){
            return res.status(422).json({ error : "Email already exits"});
           }
         const user = new User({name, email,phone,work,password,cpassword});
         await user.save();

         res.status(201).json({message: "user registered successfully"});

        }catch(err){
            console.log(err);
        }
        
})
module.exports = router;