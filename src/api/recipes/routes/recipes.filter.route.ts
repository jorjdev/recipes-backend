import { Router} from "express";
import * as RecipeController from "../controllers/recipes.controller";

const recipeFilterRouter = Router();


recipeFilterRouter.get("/:searchTerm",RecipeController.findFilteredRecipes)

export default recipeFilterRouter;
