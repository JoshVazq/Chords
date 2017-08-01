const express = require('express'),
    chords = require('../fixtures/chords.json'),
    router = express.Router(),
    chordList = chords.map(chord => ({ id: chord.id, title: chord.title, artist: chord.artist }));


router.get('/', (req, res) => {
    res.status(200).json(chordList);
});

router.get('/:chordId', (req, res) => {
    res.status(200).json(chords.find(chord => chord.id == req.params.chordId));
});

module.exports = router;