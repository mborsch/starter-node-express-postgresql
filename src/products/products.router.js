const router = require("express").Router({ mergeParams: true });
const controller = require("./products.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:productId([0-9]+)").get(controller.read).all(methodNotAllowed);
router.route("/out-of-stock-count").get(controller.listOutOfStockCount);
router.route("/price-summary").get(controller.listPriceSummary);

module.exports = router;
