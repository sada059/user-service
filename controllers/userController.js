const Users = require('../models/user');

class UserController {
    
    async getUser(req, res) {
        const userId = req.user?.id; // Assuming logged in user's ID is stored in req.user.id
        const user = await Users.findOne({ _id: userId }); 
        const response = user.userType === 'admin' ? await Users.find({}) : await Users.find({userType: user.userType});
        return res.status(200).json({
            success: true,
            message: 'returning users based on User Type',
            response
        });
    }

    async createUser(req, res) {
        let userData = req.body;
        const response = await Users.create(userData);
        return res.status(201).json({
            success: true,
            message: 'User creation successful',
            response
        });
    }

    async deleteUser(req, res) {
        const userId = req.user?.id; // Assuming logged in user's ID is stored in req.user.id
        const user = await Users.findOne({ _id: userId }); 
        user.isDeleted = true;
        user.save();
        return res.status(200).json({
            success: true,
            message: 'deletion successful'
        });
    }
}

module.exports = UserController;
