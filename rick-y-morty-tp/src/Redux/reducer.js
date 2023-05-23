const initialState = {
    myFavorites: [],
    allCharactersFav: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAV":
        return {
          ...state,
          allCharactersFav: [...state.allCharactersFav, action.payload],
          myFavorites: [...state.myFavorites, action.payload],
        };
  
      case "REMOVE_FAV":
        return {
          ...state,
          myFavorites: state.myFavorites.filter(
            (item) => item.id !== Number(action.payload)
          ),
        };
  
        case "FILTER":
  const allCharacterFiltered = state.allCharactersFav.filter(
    (char) => char.gender === action.payload
  );
  return {
    ...state,
    myFavorites: allCharacterFiltered,
  };

          
  
  case "ORDER":
    const allCharactersFavCopy = [...state.allCharactersFav];
    const sortedFavorites =
      action.payload === "A"
        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
        : allCharactersFavCopy.sort((a, b) => b.id - a.id);
    return {
      ...state,
      myFavorites: sortedFavorites,
    };
  
  
      default:
        return { ...state };
    }
  };
  
  export default reducer;
  