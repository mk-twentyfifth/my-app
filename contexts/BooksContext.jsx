import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { UserContext } from "../contexts/UserContext";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "68c96c0d0000583d0348";
const COLLECTION_ID = "68c96c170033dc25e6a7";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async function createBook(data) {
    try {
      // save a new record to a collection(table) in a database
      const newBook = databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        // only the user that create have the permission to view the record
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}
