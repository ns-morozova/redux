import { Item } from "./reducers/itemsReducer";

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_EDIT_ITEM = 'SET_EDIT_ITEM';
export const SET_ORIGINAL_ITEM = 'SET_ORIGINAL_ITEM';
export const UPDATE_FILTER = 'UPDATE_FILTER';


export const addItem = (item: Item) => ({ type: ADD_ITEM, payload: item });
export const updateItem = (item: Item) => ({ type: UPDATE_ITEM, payload: item });
export const deleteItem = (id: number) => ({ type: DELETE_ITEM, payload: id });
export const setEditItem = (id: number | null) => ({ type: SET_EDIT_ITEM, payload: id });
export const setOriginalItem = (item: Item | null) => ({ type: SET_ORIGINAL_ITEM, payload: item });
export const updateFilter = (filter: string) => ({ type: UPDATE_FILTER, payload: filter });
