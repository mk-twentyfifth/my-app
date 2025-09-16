import { createContext, useState } from "react";

const DATABASE_ID = "68c96c0d0000583d0348";
const COLLECTION_ID = "68c96c170033dc25e6a7";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

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
