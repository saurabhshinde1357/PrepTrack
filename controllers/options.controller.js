const getOptions = (req, res) => {
    const type = parseInt(req.params.type);

    switch(type) {
        case 1:
            res.render("option");
            break;
        case 2:
            res.render("option2");
            break;
        case 3: 
            res.render("option3");
            break;
        case 4:
            res.render("option4");
            break;
        default:
            res.status(404).send({
                message: "Page Not Found"
            });
    }
};

module.exports = {
    getOptions,
}