import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: [] });
});

router.get('/add', (req, res) => {
    res.send(`Request came from /add endpoint.. ${req.originalUrl}`);
});

export default router;