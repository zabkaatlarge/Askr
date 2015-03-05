module.exports = {
validate : function (req,res){
    
    var username = req.query.username;
    var password = req.query.password;
    
    console.log (username);
    console.log(password);
    if(username === "admin" && password === "admin")
    {
        return true;
    }
    else{
        return false;
    }
    
}
};