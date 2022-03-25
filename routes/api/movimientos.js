const router = require("express").Router();
const { Presupuesto } = require("../../db");

router.get("/", async (req, res) => {
  const movimientos = await Presupuesto.findAll();
  res.json(movimientos);
});

router.get("/:id", async (req, res) => {
  const movimiento = await Presupuesto.findOne({
    where: { id: req.params.id},
  })
    .then((movimiento) => {
      res.json(movimiento);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", async (req, res) => {
  const agregar = await Presupuesto.create({
    concepto: req.body.concepto,
    monto: req.body.monto,
    fecha: req.body.fecha,
    tipo: req.body.tipo,
  })
    .then((agregar) => {
      res.json(agregar);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:movId", async (req, res) => {
  await Presupuesto.update(req.body, {
    where: { id: req.params.movId },
  });
  res.json({ success: "se ha modificado " });
});

router.delete("/:movId", async (req, res) => {
  await Presupuesto.destroy({
    where: { id: req.params.movId },
  });
  res.json({ success: "registro borrado" });
});

module.exports = router;
