const express = require('express');
const router = express.Router();

const generichandeler = (req, res, next) => {
    res.json({
        status: 'success',
        data: req.body,
    });
};

// create a new teacher or student
router.post('/people', generichandeler);

// change auth credentials for teachers
router.post('/auth/edit', generichandeler);

// accept fee payments for students
router.post('/fees/pay', generichandeler);

module.exports = router;