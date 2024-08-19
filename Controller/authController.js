const AuthController = (req, res) => {
    let user = Myusers.find(user => user.email === req.body.email && user.password === req.body.password);
      if(user){
       res.send(user);
      }
       else{
           res.status(401).send("Invalid username/password");
       }  
}

module.exports = AuthController;