import type { Tables } from "./database.types";


type Article = Tables<"articles">;

// Define the WritableStore class
class WritableStore {
  private store: Article[] = [];

  // Add a new article to the store
  addArticle(newArticle: Article) {
    this.store.push(newArticle);
  }

  // Get all articles in the store
  getAllArticles(): Article[] {
    return this.store;
  }

  // Update an article in the store
  updateArticle(updatedArticle: Article) {
    const index = this.store.findIndex((article) => article.id === updatedArticle.id);
    if (index !== -1) {
      this.store[index] = updatedArticle;
    }
  }
}

// Export the WritableStore class
export default WritableStore;
