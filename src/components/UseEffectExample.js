import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice(0, 5)); // Limit to 5 items
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>useEffect Example</h2>
      {loading ? <p>Loading...</p> : <ul>{data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>}
    </div>
  );
};

export default UseEffectExample;
