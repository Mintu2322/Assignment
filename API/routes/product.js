const routes = require("routes").Routes();
const productController = require("../controllers/productController");

router.get("/", productController.product_all);
router.get("/:productId", productController.product_details);

module.exports = router;
