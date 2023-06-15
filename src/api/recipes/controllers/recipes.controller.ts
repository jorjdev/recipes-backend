import { Request, Response, NextFunction } from "express";
import { Recipe, RecipeWithId } from "../models/recipes.model";
import * as RecipesService from "../services/recipes.service";
import ErrorResponse from "../../../interfaces/Shared/ErrorResponse";
import { errorHandler, notFound } from "../../../middlewares";
import {  RecipesDTO } from "../../../interfaces/Recipes/RecipesDTO";
import { Pagination } from "@/interfaces/Shared/Pagination";

export const findAll = async (
  req: Request<{}>,
  res: Response<ErrorResponse | RecipesDTO | RecipeWithId[]>,
  next: NextFunction
) => {
  try {
    const { page, perPage } = req.query;
    const pagination: Pagination = {
      page: page ? parseInt(page as string, 10) : 0,
      perPage: perPage ? parseInt(perPage as string, 10) : 0,
    };
    const result = await RecipesService.getAllRecipes({
      page: pagination.page,
      perPage: pagination.perPage,
    });
    if (result) {
      res.json(result);
    } else {
      notFound(req, res, next);
    }
  } catch (error) {
    errorHandler(error as Error, req, res, next);
  }
};
export const findOne = async (
  req: Request<{ id: string }>,
  res: Response<ErrorResponse | Recipe>,
  next: NextFunction
) => {
  try {
    const result = await RecipesService.getRecipe(req.params.id);
    if (result) {
      res.json(result);
    } else {
      notFound(req, res, next);
    }
  } catch (error) {
    errorHandler(error as Error, req, res, next);
  }
};

export const findFilteredRecipes = async (
  req: Request<{ searchTerm: string }>,
  res: Response<ErrorResponse | RecipeWithId[]>,
  next: NextFunction
) => {
  try {
    const result = await RecipesService.getFilteredRecipe(
      req.params.searchTerm
    );
    if (result) {
      res.json(result);
    } else notFound(req, res, next);
  } catch (error) {
    errorHandler(error as Error, req, res, next);
  }
};
