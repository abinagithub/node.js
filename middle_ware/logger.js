function log(req, res, next) {
    console.log('autntication..')
    next();
}

module.exports = log;

