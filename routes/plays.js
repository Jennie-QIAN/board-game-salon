const express = require('express');
const router  = express.Router();

const { findAllPlays } = require('../queries/plays.query');

router.get('/plays', async (req, res, next) => {
    const {location} = req.query;
    const availableLocations = ["Paris", "Lyon", "Nice", "Hyères", "Corse"];
    const nonSelectedLocations = availableLocations.filter((loc => loc !== location));

    const plays = await findAllPlays(location);

    res.render('plays/plays', {
        location,
        nonSelectedLocations,
        isLoggedIn: req.isAuthenticated(),
        plays,
    });
});

module.exports = router;