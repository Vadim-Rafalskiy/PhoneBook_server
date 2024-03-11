import { Router } from "express";

import ctrl from "../../controllers/auth-controllers.js";
import { authenticate } from "../../middlewares/index.js";
import { userSchemas } from "../../models/user.js";
import { validateBody } from "../../utils/index.js";

const router = new Router();

/// signup
router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  ctrl.register
);
// signin
router.post("/login", validateBody(userSchemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

export default router;
