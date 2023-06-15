import * as z from 'zod';
import { db } from '../../../db/db';
import { WithId } from 'mongodb';
  


const recipe = z.object({
  _id: z.string(), // Add an optional _id property
    id: z.string(),
    name: z.string(),
    source: z.string(),
    preptime: z.number(),
    waittime: z.number(),
    cooktime: z.number(),
    servings: z.number(),
    comments: z.string(),
    calories: z.number(),
    fat: z.number(),
    satfat: z.number(),
    carbs: z.number(),
    fiber: z.number(),
    sugar: z.number(),
    protein: z.number(),
    instructions: z.string(),
    ingredients: z.array(z.string()),
    tags: z.array(z.string()),
  });

 export type Recipe = z.infer<typeof recipe>;
export type RecipeWithId = WithId<Recipe>;
 export const Recipes  = db.collection<Recipe>('recipes')