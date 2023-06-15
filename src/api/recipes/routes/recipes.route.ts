import { Router} from "express";
import * as RecipeController from "../controllers/recipes.controller";
import recipeFilterRouter from "./recipes.filter.route";

const router = Router();

router.get("/", RecipeController.findAll);
router.get("/:id", RecipeController.findOne);
router.use("/filter",recipeFilterRouter)

export default router;
