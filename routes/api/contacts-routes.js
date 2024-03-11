import { Router } from "express";

import ctrl from "../../controllers/contacts-controllers.js";
import { isValidId, authenticate } from "../../middlewares/index.js";
import { validateBody } from "../../utils/index.js";
import { contactSchemas } from "../../models/contact.js";

const router = new Router();

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(contactSchemas.addSchema),
  ctrl.addContact
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(contactSchemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(contactSchemas.updateFavoriteSchema),
  ctrl.updateFavoriteById
);

router.delete("/:id", authenticate, isValidId, ctrl.deleteContactById);

export default router;
