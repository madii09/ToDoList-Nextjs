'use client';

import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState<
    { text: string; completed: boolean; createdAt: string }[]
  >([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    const createdAt = new Date().toLocaleString();
    setTodos([...todos, { text, completed: false, createdAt }]);
    setNewTodo('');
  };

  const removeTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleCompleted = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <main className='min-h-screen p-4 flex flex-col items-center'>
      <h1 className='text-xl sm:text-2xl font-bold mb-4'>📝 To Do List</h1>

      <div className='flex flex-col sm:flex-row gap-2 mb-4 w-full max-w-md'>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className='w-md border px-2 py-1 rounded'
          placeholder='Enter a task'
        />
        <button
          onClick={() => addTodo(newTodo)}
          className='bg-blue-500 px-4 text-white cursor-pointer py-1 rounded hover:bg-blue-600'
        >
          Add
        </button>
      </div>

      <ul className='w-full max-w-md'>
        {todos.map((todo, index) => (
          <li
            key={index}
            className='flex items-center justify-between gap-2 
             bg-white text-black 
             dark:bg-gray-600 dark:text-white 
             p-2 mb-2 rounded shadow transition-colors duration-300'
          >
            <div className='flex items-center gap-2 flex-1 overflow-hidden'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
                className='accent-green-500 w-4 h-4 '
              />
              <div className='flex flex-col overflow-hidden'>
                <span
                  className={`truncate ${
                    todo.completed
                      ? 'line-through text-gray-400 dark:text-gray-500'
                      : 'text-black dark:text-white'
                  }`}
                >
                  {todo.text}
                </span>
                <small className='text-xs text-gray-500 dark:text-gray-300'>
                  {todo.createdAt}
                </small>
              </div>
            </div>
            <button
              onClick={() => removeTodo(index)}
              className='text-red-500 hover:text-red-700 font-bold text-xl shrink-0 cursor-pointer'
              aria-label='Delete'
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
