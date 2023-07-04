'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-4xl">{count}</h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Increment
      </button>
    </>
  );
}
