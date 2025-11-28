import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export interface Recipe {
  id: string;
  name: string;
  description: string;
}

export type RecipeArgs = Omit<Recipe, "id">;

export const useRecipeStore = defineStore("recipe", () => {
  const recipes = ref<Recipe[]>([]);

  const favouriteRecipesIds = ref<string[]>([]);

  const addRecipe = (args: RecipeArgs): Recipe => {
    const newRecipe = {
      ...args,
      id: uuidv4(),
    };

    recipes.value.push(newRecipe);

    return newRecipe;
  };

  const getRecipeById = (id: string): Recipe | undefined => {
    return recipes.value.find((recipe) => recipe.id === id);
  };

  const filteredRecipes = (searchQuery: string) => {
    return recipes.value.filter(
      (recipe) =>
        searchQuery === "" ||
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const editRecipe = (recipeId: string, args: RecipeArgs) => {
    const recipe = recipes.value.find((recipe) => recipe.id === recipeId);

    if (recipe === undefined) return;

    const editedRecipeValue = {
      ...recipe,
      name: args.name,
      description: args.description,
    };

    recipes.value[recipes.value.indexOf(recipe)] = editedRecipeValue;
  };

  const isInFavourites = (recipe: Recipe): boolean => {
    return (
      favouriteRecipesIds.value.find(
        (favouriteId) => favouriteId === recipe.id
      ) !== undefined
    );
  };

  const toggleFavourite = (recipe: Recipe) => {
    const favouriteRecipeId = favouriteRecipesIds.value.find(
      (favouriteId) => favouriteId === recipe.id
    );

    if (favouriteRecipeId === undefined) {
      favouriteRecipesIds.value.push(recipe.id);
    } else {
      favouriteRecipesIds.value = favouriteRecipesIds.value.filter(
        (favouriteId) => favouriteId !== recipe.id
      );
    }
  };

  const favouriteRecipes = computed(() => {
    return recipes.value.filter((recipe) =>
      favouriteRecipesIds.value.includes(recipe.id)
    );
  });

  return {
    recipes,
    favouriteRecipesIds,
    favouriteRecipes,
    getRecipeById,
    addRecipe,
    editRecipe,
    filteredRecipes,
    isInFavourites,
    toggleFavourite,
  };
});
