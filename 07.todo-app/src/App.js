import { useState } from 'react';
import './App.css';
import { TodoContext } from './context/TodoContext';
import TodoHome from './pages/TodoHome';

function App() {
  const [todos, setTodos] = useState([])
  console.log(todos);

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      <TodoHome/>
    </TodoContext.Provider>
  );
}

export default App;
