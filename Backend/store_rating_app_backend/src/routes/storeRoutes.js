const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

// Create store
router.post("/", storeController.createStore);

// Get all stores
router.get("/", storeController.getAllStores);

// Get store by ID
router.get("/:id", storeController.getStoreById);

// Update store
router.put("/:id", storeController.updateStore);

// Delete store
router.delete("/:id", storeController.deleteStore);

module.exports = router;
