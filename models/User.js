const { Schema, model } = require('mongoose');

// Define the schema for the User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please use a valid email address",
            ],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    // Include virtuals when converting documents to JSON
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual field called friendCount that retrieves the length of the user's friends array field on query
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// Create the User model using the userSchema
const User = model('User', userSchema);

module.exports = User;
