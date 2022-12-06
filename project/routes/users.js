const express = require('express')
const router = express.Router();
const User = require('../model/userSchema')
const jwt= require('jsonwebtoken')

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


          else if(password != cpassword){
            return res.status(422).json({ error : "Passwords not matching"});
           }

           else{
            const user = new User({name, email,phone,work,password,cpassword});
            await user.save();
   
            res.status(201).json({message: "user registered successfully"});
   
           }

        
        }catch(err){
            console.log(err);
        }
        
})

//login routing
router.post('/signin',async (req,res) =>{

try{
  let token;
  const {email,password}=req.body;

  if (!email || !password){
return res.status(400).json({error: " Please fill in all the required data!!"})
  }

  const   userLogin= await User.findOne({email: email});
  //console.log(userLogin);

  if(userLogin)
{

   token= await userLogin.generateAuthToken();  
  console.log(token); 

  res.cookie("jwtoken", token, {

    expires:new Date(Date.now()+25892000000), //token will expire after 30 days
    httpOnly:true

  });

  if(userLogin.password!=password)
  {
    res.status(400).json({ message : "ERROR!"});//password is wrong---------try if this works!!!!
  }

  else{
    res.json({ message : "Signed In Successfully!"});
  }
}
else
{
  res.status(400).json({ message : "ERROR!"});  //email ghalat daali hogi
}
  

}
catch(err){

console.log(err);
}

});
module.exports = router;  
