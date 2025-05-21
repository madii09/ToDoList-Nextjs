'use client';

import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>(
    []
  );
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    setTodos([...todos, { text, completed: false }]);
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
    <main className='min-h-screen p-4 flex flex-col items-center bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>📝 To Do List</h1>

      <div className='flex gap-2 mb-4'>
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
            className='flex justify-between items-center bg-white p-2 mb-2 rounded shadow'
          >
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
                className='accent-green-500 w-4 h-4'
              />
              <span
                className={`text-black ${
                  todo.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => removeTodo(index)}
              className='text-red-500 hover:text-red-700 font-bold text-lg cursor-pointer'
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
