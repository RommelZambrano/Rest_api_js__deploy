import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";



const router = Router();
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/", authCtrl.signin);

export default router;
