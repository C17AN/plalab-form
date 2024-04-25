import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUsers = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ["https://jsonplaceholder.typicode.com/users"],
    queryFn: () => getUsers(),
    cacheTime: 1000 * 60 * 5,
  });
};
