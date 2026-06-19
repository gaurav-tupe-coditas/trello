import { Router } from "express";
import companyService from "./company.service.js";
import { Route } from "../../routes/routes.types.js";
import { RoutePermissionChecker } from "../../middleware/permission.handle.js";
import { upload } from "../../utils/multer.js";
import { body } from "../../utils/validator.js";
import {
  CompanyRouteCreate,
  CompanyServiceCreate,
  RouteViewCompany,
} from "./company.types.js";

const router = Router();

router.post(
  "/create",
  RoutePermissionChecker("create-company"),
  upload.single("company-logo"),
  body(CompanyRouteCreate),
  async (req, res, next) => {
    try {
      let companydata = { ...req.body, logo: req.file?.path };
      companydata = CompanyServiceCreate.parse(companydata);
      const result = await companyService.createCompany(companydata);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/:id",
  RoutePermissionChecker("view-company"),
  async (req, res, next) => {
    try {
      const parsedParams = RouteViewCompany.parse(req.params);
      const result = await companyService.getCompanyById(parsedParams.id);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  },
);

export default new Route("/company", router);
