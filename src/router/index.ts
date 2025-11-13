import HomeView from "../components/Project06/views/HomeView.vue";
import FavoritesView from "../components/Project06/views/FavoritesView.vue";
import AddRecipeView from "../components/Project06/views/AddRecipeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import RecipeView from "../components/Project06/views/RecipeView.vue";
import NotFoundView from "../components/Project06/views/NotFoundView.vue";

const routes = [
  {
    path: "/project06",
    name: "home",
    component: HomeView,
  },
  {
    path: "/project06/home",
    redirect: "/project06",
  },
  {
    path: "/project06/favorites",
    alias: "/project06/favourites",
    name: "favorites",
    component: FavoritesView,
  },
  {
    path: "/project06/recipe/:id",
    name: "recipe",
    component: RecipeView,
  },
  {
    path: "/project06/add-recipe",
    name: "add-recipe",
    component: AddRecipeView,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
