const jwt = require("jsonwebtoken");

const authJWT = (req,res,next) => {
    // get header payload
    const headerAuth = req.headers["authorization"];

    if(headerAuth) {
        // get token 
        const getToken = headerAuth.split(' ')[1];

        // verify token
        const verifiedToken = jwt.verify(getToken, process.env.SECRET_KEY);

        // if token is not verified
        if(!verifiedToken) {
            res.status(404).json({msg: "Auth failed"});
        }

        // got to protected routes 
        next();
        
    }else {
        res.status(404).json({msg: "No headers found"})
    }
}

module.exports = {
    authJWT
}