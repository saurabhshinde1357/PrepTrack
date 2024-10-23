const Material = require("../models/Materials");

const uploadFile = async(req, res)=>{
    const data = new Material({
        materialUrl: req.file.path
    });

    await data.save();
    

    res.redirect("/dashboard/admin");
}


const getUploads = async(req, res) =>{
    const data = await Material.find({});
    res.json(data);
}

module.exports = {uploadFile, getUploads};