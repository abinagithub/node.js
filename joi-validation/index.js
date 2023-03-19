const express = require('express');
const router = express.router();

const abeni =(req, res) => {
    res.json({
        status: 'success',
        data: req.body
    })
}

router.post('/people', abeni)

module.exports = router;