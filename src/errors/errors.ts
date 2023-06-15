class RecipeNotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'RecipeNotFoundError';
      this.status = 404;
    }
  
    status: number;
  }
  
  class RecipesNotFoundError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'RecipesNotFoundError';
      this.status = 403;
    }
  
    status: number;
  }
  
  export { RecipeNotFoundError, RecipesNotFoundError };
  