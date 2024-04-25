import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getTodos = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/todos");
  return res.data;
};

export const useGetTodosQuery = () => {
  return useQuery({
    queryKey: ["https://jsonplaceholder.typicode.com/todos", index],
    queryFn: () => getTodos(),
    cacheTime: 1000 * 60 * 60,
    retry: false,
  });
};

// ["https://jsonplaceholder.typicode.com/todos", 0]

// data: 1 ~ 100개 게시물

// ["https://jsonplaceholder.typicode.com/todos", 1]

// data: 101 ~ 200개 게시물
