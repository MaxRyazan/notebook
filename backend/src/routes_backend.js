import {Router} from "express";
import Controller from "./Controller.js";

const router = new Router()

router.get('/', Controller.get)
router.get('/:id', Controller.delete)
router.post('/', Controller.create)
router.delete('/', Controller.delete)


export default router;