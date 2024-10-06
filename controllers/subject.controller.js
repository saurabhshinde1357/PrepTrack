const getSubjects = (req, res) => {
    const type = req.params.type;

    switch(type) {
        case "c":
            res.render("jee(c)");
            break;
        case "m":
            res.render("jee(m)");
            break;
        case "p":
            res.render("jee(p)");
            break;
        default:
            res.status(404).send({
                message: "Page Not Found"
            });
    }
};

module.exports = {
    getSubjects,
}