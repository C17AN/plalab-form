"use client";

import { useGetTodosQuery } from "@/apis/useGetTodos";
import { useGetUsersQuery } from "@/apis/useGetUsers";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

const TodosPage = (props: Props) => {
  //   const [todoList, setTodoList] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  const {
    data: todoList,
    isLoading: todoIsLoading,
    isSuccess: todoIsSuccess,
    isError: todoIsError,
  } = useGetTodosQuery();

  useEffect(() => {
    if (todoIsError) {
      alert("에러가 발생했습니다.");
    } else if (todoIsSuccess) {
      alert("선물을 받았어요!");
    }
  }, [todoIsError, todoIsSuccess]);

  //   const { data: userList, isLoading: userLoading } = useGetUsersQuery();

  // useEffect(() => {
  //   getTodos();
  // }, []);

  // const getTodos = async () => {
  //   setIsLoading(true);
  //   const res = await axios("https://jsonplaceholder.typicode.com/todos");

  //   setTodoList(res.data);
  //   setIsLoading(false);

  //   return res.data;
  // };

  //   const getUsers = async () => {
  //     const res = await axios("https://jsonplaceholder.typicode.com/users");
  //     return res.data;
  //   };

  //   const { data: userList } = useQuery({
  //     queryKey: ["https://jsonplaceholder.typicode.com/users"],
  //     queryFn: () => getUsers(),
  //     cacheTime: 1000 * 60 * 5,
  //   });

  return (
    <>
      {todoIsLoading ? (
        <div>로딩 중 ...</div>
      ) : (
        <ul>
          {todoList?.map((todo) => (
            <li className="mb-2 font-semibold" key={todo.title}>
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodosPage;
