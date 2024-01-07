module.exports.home = async (req, res) => {
    try {
        return res.render('home', {
            title: "Home | URL Shortener"
        });
    } catch (err) {
        res.send({message: err.message});
    }
}