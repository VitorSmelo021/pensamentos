const express = require("express")
const ThoughtsController = require("../controllers/ThoughtsController")

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dahsboard)

router.post("/thoughts", ThoughtsController.createThought);
router.get("/thoughts", ThoughtsController.findALLThoughts);
router.get("/thoughts/:id", ThoughtsController.findOneThoughts);
router.put("/thoughts/:id", ThoughtsController.updateThoughts);
router.delete("/thoughts/:id", ThoughtsController.deleteThoughts);

module.exports = router