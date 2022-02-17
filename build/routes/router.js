"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const turma_controller_1 = require("../controllers/turma.controller");
const router = express_1.default.Router();
//Turma
router.post("/turma", turma_controller_1.postTurma);
exports.default = router;
