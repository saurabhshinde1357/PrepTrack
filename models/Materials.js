const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
        materialUrl:
        {
            type: String,
            require: true
        }
    }, { timestamps: true })


const MaterialSchemaModel = new mongoose.model("Materials", MaterialSchema);

module.exports = MaterialSchemaModel;