import React, { useState, useMemo } from 'react';

function ProductSearch() {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0); // Unrelated state
  const products = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  // Heavy calculation runs ONLY when `query` changes

  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..."
      />
      {/* Unrelated button click triggers a re-render */}
      <button onClick={() => setCount(count + 1)}>
        Re-render Count: {count}
      </button>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
