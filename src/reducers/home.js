export default (state = {}, action) => {
  switch (action.type) {
    case "HOME_PAGE_LOADED":
      return {
        ...state,
        articles: action.payload.articles,
        articleCount: action.payload.articlesCount
      };

    default:
      return state;
  }
};
