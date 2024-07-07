import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { container } from "tsyringe";
import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { ListRolesController } from "@roles/useCases/listRoles/ListRolesController";
import { ShowRoleController } from "@roles/useCases/showRole/ShowRoleController";
import { UpdateRoleController } from "@roles/useCases/updateRole/UpdateRoleController";
import { DeleteRoleController } from "@roles/useCases/deleteRole/DeleteRoleController";
import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";

const rolesRouter = Router();
const createRolesController = container.resolve(CreateRoleController);
const listRolesController = container.resolve(ListRolesController);
const showRolesController = container.resolve(ShowRoleController);
const updateRolesController = container.resolve(UpdateRoleController);
const deleteRolesController = container.resolve(DeleteRoleController);

rolesRouter.use(isAuthenticated);

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
