import { Recipes, Recipe, RecipeWithId } from "../models/recipes.model";
import { generateUniqueId } from "../../../helper/helper";
import { Pagination } from "../../../interfaces/Shared/Pagination";
import { RecipesDTO } from "@/interfaces/Recipes/RecipesDTO";

export const addRecipe = async (recipeData: Recipe): Promise<RecipeWithId> => {
  try {
    const newRecipe: Recipe = { ...recipeData, _id: generateUniqueId() };
    await Recipes.insertOne(newRecipe);
    return newRecipe;
  } catch (error) {
    throw new Error("Failed to add recipe");
  }
};
export const addRecipes = async (
  recipesData: Recipe[]
): Promise<RecipeWithId[]> => {
  try {
    const newRecipes: Recipe[] = recipesData.map((recipe) => ({
      ...recipe,
      _id: generateUniqueId(),
    }));
    await Recipes.insertMany(newRecipes);
    return newRecipes;
  } catch (error) {
    throw new Error("Failed to add multiple recipes");
  }
};

export const getRecipe = async (
  recipeId: string
): Promise<RecipeWithId | null> => {
  try {
    const recipe: RecipeWithId | null = await Recipes.findOne({ id: recipeId });
    return recipe;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};

export const getAllRecipes = async (
  pagination: Pagination
): Promise<RecipesDTO> => {
  try {
    const { page, perPage } = pagination;
    const skip = (page - 1) * perPage;
    const recipes: RecipeWithId[] =
      page === 0 && perPage === 0
        ? await Recipes.find({}).toArray()
        : await Recipes.find({}).skip(skip).limit(perPage).toArray();

    const numberOfItems = await Recipes.countDocuments({});

    return { recipes, numberOfItems };
  } catch (error) {
    throw new Error("Failed to get all recipes");
  }
};

export const getFilteredRecipe = async (
  name: string
): Promise<RecipeWithId[]> => {
  
  try {
    const result = (await Recipes.find({}).toArray()).filter((recipe) =>
      recipe.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    return result;
  } catch (error) {
    throw new Error("no matches");
  }
};

export const deleteRecipe = async () => {
  try {
  } catch (error) {
    throw new Error('')
  }
};
export const deleteAllRecipes = async () => {
  try {
  } catch (error) {}
};
