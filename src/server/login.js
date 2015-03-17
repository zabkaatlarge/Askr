module.exports = {
validate : function (req,res){
    
    var username = req.query.username;
    var password = req.query.password;
    
   // console.log (username);
    //console.log(password);
    if(username === "admin" && password === "admin")
    {
       req.session.username="admin";
        res.render('index.ejs',{
       layout: false,
        title: 'Successfull Logged in',
        session : req.session
    });
    }
    else{
         res.append("error","Authentication Failed");
        res.sendFile(__dirname+"/client/index.html");
    }
    
}
};  