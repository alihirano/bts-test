import React, { useEffect } from "react";
import Card from "./card";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../action/user";

const User = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);
  console.log(isLoading);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  console.log(users);

  return (
    <div>
      {users.map((data) => (
        <Card name={data.name} key={data.id} company={data.company} />
      ))}
    </div>
  );
};

export default User;
