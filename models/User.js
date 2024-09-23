const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({

    fname: {
        type: String,
        require: [true, "Full Name is required"],
    },

    email: {
        type: String,
        require:[true, "Email is required"],
        unique:  [true, "Email is already Register please try to login"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("email not valid");
            }
        }
    },

    password: {
        type: String,
        require: [true, "Password is required"],
    }
}, { timestamps: true })


UserSchema.pre("save", async function(next){

    this.password  = await bcrypt.hash(String(this.password), 10);
    
    next();
});


const UserSchemaModel = new mongoose.model("Users", UserSchema);

module.exports = UserSchemaModel;