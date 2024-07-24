const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


function auth(req, res, next){
    console.log("inside middleware...")
    const authHeader = req.headers["authorization"];
    console.log(authHeader);
    const token = authHeader;
    if(token == null) return res.status(401).send({success : 401, message : "UnAuthorized User"});

    jwt.verify(token, "CIPHERSCHOOL", (err, user) =>{
        if(err) return res.status(403).send({success : 403, message: "Session Expired, try to login again"});
        console.log(user.email);
        req.userId = user.email;
        next();
    })
}

module.exports = {
    auth,
}