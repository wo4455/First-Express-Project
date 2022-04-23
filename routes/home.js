const express = require('express');
const router = express.Router();

// Static Files
router.use(express.static(('public')));
router.use('/css', express.static(__dirname + 'public/css'));
router.use('/js', express.static(__dirname + 'public/js'));

router.get('', (req, res) => {
    res.render('index'); // could add second arg for variables in ejs, like { text: "hi" }
});

module.exports = router;