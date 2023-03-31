import React, { useEffect, useState } from "react";

function TodoWithPagination() {
  //data
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  //fetch data
  const getTodos = async (p = 1) => {
    try {
      setLoading(true);
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${p}_limit=10`
      );
      data = await data.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos(page);
  }, [page]);

  return (
    <div>
      <h1>TODOS</h1>
      <button onClick={() => setPage((page) => page - 1)} disabled={page === 1}>
        PREV
      </button>
      <span style={{ padding: "1rem" }}>{page}</span>
      <button onClick={() => setPage((page) => page + 1)}>NEXT</button>
      <div>{loading && <h3>Loading...</h3>}</div>
      {/* <button onClick={getTodos}>FETCH</button> */}
      <div>
        {data.map((todo) => (
          <div
            style={{ display: "flex", gap: "1rem", margin: "1rem" }}
            key={todo.id}
          >
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.status ? "Done" : "Not Done"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoWithPagination;
