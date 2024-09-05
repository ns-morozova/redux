import { UPDATE_FILTER } from "../actions";

interface UpdateFilterAction {
  type: typeof UPDATE_FILTER;
  payload: string;
}

type FilterActions = UpdateFilterAction;

const filterReducer = (state = '', action: FilterActions) => {   
  switch (action.type) {
      case UPDATE_FILTER:
        return action.payload;
      default:
      return state;
  }
};

export default filterReducer;