function aut(req, res, next) {
    console.log('logging..')
    next();
}

module.exports = aut;