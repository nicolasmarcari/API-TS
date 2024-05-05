import { Router } from "express";
import { createRolesController } from "@roles/useCases/createRole";
import { listRolesController } from "@roles/useCases/listRoles";
import { showRolesController } from "@roles/useCases/showRole";
import { updateRolesController } from "@roles/useCases/updateRole";
import { deleteRolesController } from "@roles/useCases/deleteRole";
import { celebrate, Joi, Segments } from "celebrate";

const rolesRouter = Router();

rolesRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (req, res) => {
    return createRolesController.handle(req, res);
  },
);

rolesRouter.get(
  "/",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (req, res) => {
    return listRolesController.handle(req, res);
  },
);

rolesRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (req, res) => {
    return showRolesController.handle(req, res);
  },
);

rolesRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (req, res) => {
    return updateRolesController.handle(req, res);
  },
);

rolesRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (req, res) => {
    return deleteRolesController.handle(req, res);
  },
);

export { rolesRouter };
