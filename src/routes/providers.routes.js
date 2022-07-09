import { Router } from "express";
import * as providerController from "../controllers/providers.controller";

const router = Router();

router.post("/", providerController.postProviders);
router.get("/", providerController.getAllProviders);
router.get("/:id", providerController.getOneProvider);
router.delete("/:id", providerController.deleteOneProvider);
router.put("/:id", providerController.putProvider);

export default router;
