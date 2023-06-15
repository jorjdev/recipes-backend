import { RecipeWithId } from "../../api/recipes/models/recipes.model";

export interface RecipesDTO {
  recipes: RecipeWithId[];
  numberOfItems: number;
}



export interface MacroNutrients{
    protein : number,
    fat : number,
    carbs : number,
}

export interface RecipesFilters {
    name : string,
    tags : string[];
    calories : number;
    servings: number;
    macroNutrients : MacroNutrients;
    
}
