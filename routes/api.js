const router = require ('express').Router();

const apiMovRouter=require('./api/movimientos');

router.use('/presupuesto', apiMovRouter);






module.exports= router;