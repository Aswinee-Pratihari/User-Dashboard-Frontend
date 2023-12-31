import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserState";
import { ModalContext } from "./ModalState";

export const ContactContext = createContext(null);

export const ContactProvider = ({ children }) => {
  const [contact, setcontact] = useState(null);
  const { setUser } = useContext(UserContext);
  const { setIsOpen } = useContext(ModalContext);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage?.getItem("token")}`,
    // Add other headers as needed
  };

  const deleteContact = async (userId) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/contacts/${userId}`,
        { headers: headers }
      );
      const result = await res?.data;
      if (result) {
        setUser(result);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllContacts = async (query, sort) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/contacts?query=${query}&sort=${sort}`,
        {
          headers: headers,
        }
      );

      const json = await response.data;
      // console.log(json);
      return json.contacts;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSingleContact = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/contacts/${id}`,
        {
          headers: headers,
        }
      );

      const json = await response.data;
      // console.log(json);
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const editContact = async (id, formData) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/contacts/${id}`,
        formData,
        {
          headers: headers,
        }
      );
      console.log(response);
      const json = await response.data;
      // console.log(json);
      setUser(json);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const postContact = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/contacts`,
        formData,
        {
          headers: headers,
        }
      );
      const json = await response.data;
      // console.log(json);
      setUser(json);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContactContext.Provider
      value={{
        deleteContact,
        getAllContacts,
        editContact,
        postContact,
        getSingleContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
