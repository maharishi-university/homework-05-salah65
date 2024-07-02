type RecipesResponse = {
    recipes: Array<{
        id: number;
        name: string;
        ingredients: Array<string>;
        instructions: Array<string>;
        prepTimeMinutes: number;
        cookTimeMinutes: number;
        servings: number;
        difficulty: string;
        cuisine: string;
        caloriesPerServing: number;
        tags: Array<string>;
        userId: number;
        image: string;
        rating: number;
        reviewCount: number;
        mealType: Array<string>;
    }>;
    total: number;
    skip: number;
    limit: number;
};


export async function fetchRecipes() {
    try {
        const rawResponse: Response = await fetch('https://dummyjson.com/recipes');
        const jsonBody: RecipesResponse = await rawResponse.json();
        const recipeNames = jsonBody.recipes.map(recipe => recipe.name);
        console.log(recipeNames);
    }
    catch (error) {
        console.error('An error occurred:', error.message);
    }
}