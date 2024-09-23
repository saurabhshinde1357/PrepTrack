const getHomePage = (req, res) =>{
    const userName = req.session.userName;
    res.render("home", {userName});
}

module.exports = {getHomePage};