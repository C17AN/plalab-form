"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const TodosPage = (props: Props) => {
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/todos");
    setTodoList(res.data);
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ["https://jsonplaceholder.typicode.com/todos"],
    queryFn: () => getTodos(),
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });

  //   useEffect(() => {
  //     getTodos();
  //   }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ul>
      {data?.map((todo) => (
        <li className="mb-2 font-semibold" key={todo.title}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodosPage;
