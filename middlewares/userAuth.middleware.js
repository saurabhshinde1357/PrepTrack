
let createUserAuth = async (req, res, next) => {
    if (req.session.user!=undefined) {
        next();
    }
    else {
        res.redirect("/auth/login");
    }
}

module.exports = createUserAuth;
