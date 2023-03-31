import React, { useEffect, useState } from "react";

function Todo() {
  //data
  const [data, setData] = useState([]);
  //fetch data
  const getTodos = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/todos");
      data = await data.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>TODOS</h1>
      {/* <button onClick={getTodos}>FETCH</button> */}
      <div>
        {data.map((todo) => (
          <div
            style={{
              display: "flex",
              textAlign: "center",
              gap: "1rem",
              margin: "1rem"
            }}
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

export default Todo;
