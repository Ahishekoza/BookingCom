import userSchema from "../models/user.js";



export const updateUser = async (req, res) => {
    //  parameter and body  `@TODO password change logic can also be implemented
    await userSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((updatedResponse) => {
            res.status(200).json({
                updatedUser: updatedResponse
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        });

}

export const deleteUser = async (req, res) => {
    await userSchema.findByIdAndDelete(req.params.id)
        .then((response) => {
            res.status(200).json({
                message: 'User deleted successfully'
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        });
}

export const getUserById = async (req, res) => {
    await userSchema.findById(req.params.id)
        .then((user) => {
            res.status(200).json({
                message: 'User found successfully',
                user: user
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        })
}

export const getUsers = async (req, res) => {
    await userSchema.find()
        .then((user) => {
            res.status(200).json({
                message: 'Users found successfully',
                users: user
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        })
}