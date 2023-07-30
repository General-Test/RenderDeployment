const express = require("express");

const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  createGroupChat,
  fetchChats,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require("../controllers/chatControllers");

const router = express.Router();

router.post("/", protect, accessChat);
router.post("/group", protect, createGroupChat);

router.get("/", protect, fetchChats);

router.put("/rename", protect, renameGroup);
router.put("/groupremove", protect, removeFromGroup);
router.put("/groupadd", protect, addToGroup);

module.exports = router;
