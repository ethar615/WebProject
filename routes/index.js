let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
      title: 'Home'
    });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', {
      title: 'Home'
    });
});

/* GET About Me page. */
router.get('/Aboutme', function(req, res, next) {
    res.render('aboutme', {
      title: 'About Me'
    });
});

/* GET Projects page. */
router.get('/project', function(req, res, next) {
    res.render('projects', {
      title: 'Projects'
    });
});

/* GET Contact Me page. */
router.get('/contactme', function(req, res, next) {
    res.render('contactme', {
      title: 'Contact Me'
    });
});

/* POST Contact Form Submission. */
router.post('/submit-contact', function(req, res, next) {
    // Rendering the thank you page
    res.render('submit-contact', {
      title: 'Thank You'
    });
});

module.exports = router;
