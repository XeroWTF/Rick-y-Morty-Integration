const users = require ("../utils/users/users")

const login = (req, res) => {
    
    let {email, password} = req.query ;

    const userFound = user.find((user) => user.email === email && user.password === password)
    
    userFound
    ? res.status(200).json({access: true})
    : res.status(404).json({access: false})
};

module.exports = {login};