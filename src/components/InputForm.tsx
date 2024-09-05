import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { addItem, updateItem, deleteItem, setEditItem, setOriginalItem,updateFilter } from '../store/actions';
import ItemList from './ItemList';
import './InputForm.css';

const InputForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [number, setNumber] = useState<number | string>('');

  const dispatch = useDispatch();
  const {items, editItemId, originalItem} = useSelector((state: RootState) => state.items);
  const {filter} = useSelector((state: RootState) => state);
  
  const handleSave = () => {
    if (editItemId !== null) {
      dispatch(updateItem({ id: editItemId, text, number }));
      dispatch(setEditItem(null));
      dispatch(setOriginalItem(null));
    } else {
      if (text && number) {
        const newItem = {
          id: Date.now(),
          text,
          number,
        };
        dispatch(addItem(newItem));
      }
    }
    setText('');
    setNumber('');
  };

  const handleCancel = () => {
    if (originalItem) {
      setText(originalItem.text);
      setNumber(originalItem.number);
    } else {
        setText('');
        setNumber('');
    }

    dispatch(setEditItem(null));
    dispatch(setOriginalItem(null));
  };

  const handleDelete = (id: number) => {
      dispatch(deleteItem(id));
  };

  const handleEdit = (id: number) => {
    const itemToEdit = items.find(item => item.id === id);
    if (itemToEdit) {
      setText(itemToEdit.text);
      setNumber(itemToEdit.number);
      dispatch(setEditItem(id));
      dispatch(setOriginalItem(itemToEdit));
    }
  };

  return (
    <div className="input-form-container">
      <div className='input-filter'>
      <input
        type="text"
        value={filter}
        onChange={(e) =>  dispatch(updateFilter(e.target.value))}
        placeholder='Enter filter'
      />
      </div>
      <div className="input-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
        />
        <button onClick={handleSave}>Save</button>
        {editItemId !== null && <button onClick={handleCancel}>Cancel</button>}
      </div>
      <ItemList items={items} filter={filter} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default InputForm;