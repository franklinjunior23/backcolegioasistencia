require('dotenv').config()
const jwt = require('jsonwebtoken')
 const AuthLog = (req, res, next) => {
 try {
    const token = req.header(process.env.VALIDATION_HEADER);
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    const decoded = jwt.verify(token, process.env.SECRET_KEY_JWT);
    req.user = decoded;
    next()
 } catch (error) {
    console.log(error)
 }
};
module.exports=AuthLog