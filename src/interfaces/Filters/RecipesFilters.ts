import { MacroNutrients } from "../Recipes/RecipesDTO";

export interface RecipesFilters {
    name : string,
    tags : string[];
    calories : number;
    servings: number;
    macroNutrients : MacroNutrients;
    
}