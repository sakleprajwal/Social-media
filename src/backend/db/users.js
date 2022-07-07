import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Prajwal",
    lastName: "Sakle",
    username: "Prajwal",
    password: "Prajwal",
    email: "sakleprajwal@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Abhishek",
    lastName: "Gupta",
    username: "Abhishek",
    password: "Abhishek",
    email: "guptaabhishek@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sandip",
    lastName: "Vidhate",
    username: "Sandip",
    password: "Sandip",
    email: "vidhatesandip@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
