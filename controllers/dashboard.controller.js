const getDashboardHome = (req, res)=>{
    res.render("admin");
}


const getAdmin = (req, res)=>{
    res.render("admin");
}

module.exports = {getDashboardHome, getAdmin};