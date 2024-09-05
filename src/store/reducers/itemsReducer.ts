import { ADD_ITEM,UPDATE_ITEM, DELETE_ITEM, SET_EDIT_ITEM, SET_ORIGINAL_ITEM } from "../actions";

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}

interface UpdateItemAction {
  type: typeof UPDATE_ITEM;
  payload: Item;
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: number; // Предполагается, что ID — это число
}

interface SetEditItemAction {
  type: typeof SET_EDIT_ITEM;
  payload: number | null; // Либо номер, либо null
}

interface SetOriginalItemAction {
  type: typeof SET_ORIGINAL_ITEM;
  payload: Item | null;
}

// Объединяем все возможные действия в один тип
type ItemsActions = 
  | AddItemAction
  | UpdateItemAction
  | DeleteItemAction
  | SetEditItemAction
  | SetOriginalItemAction;

export interface Item {
  id: number;
  text: string;
  number: number | string;
}

export interface ItemsState {
  items: Item[];
  editItemId: number | null;
  originalItem: Item | null;
}

const initialState: ItemsState = {
  items: [],
  editItemId: null,
  originalItem: null,
};

const itemsReducer = (state = initialState, action: ItemsActions) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case SET_EDIT_ITEM:
      return {
        ...state,
        editItemId: action.payload,
      };
    case SET_ORIGINAL_ITEM:
      return {
        ...state,
        originalItem: action.payload,
      };
      default:
        return state;
  }
};

export default itemsReducer;