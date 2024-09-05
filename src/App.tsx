import React from 'react';
import { Provider } from 'react-redux';
import InputForm from './components/InputForm';
import store from './store';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Form Example</h1>
        <InputForm />
      </div>
    </Provider>
  );
};

export default App;