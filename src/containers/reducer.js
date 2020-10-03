import {
  HANDLE_INPUT_CHANGE,
  HANDLE_SUBMIT_ADD_CONTACT,
  HANDLE_CLEAR_FORM_DATA,
  HANDLE_SUBMIT_EDIT_CONTACT,
  HANDLE_DELETE_ITEM,
} from "./constant";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contact: {
    surname: "",
    name: "",
    company: "",
    telephone: "",
    iphone: "",
    note: "",
  },
  listContact: [],
};

const phoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT_CHANGE: {
      const event = action.data;
      const { name, value } = event.target;
      return {
        ...state,
        contact: {
          ...state.contact,
          [name]: value,
        },
      };
    }

    case HANDLE_SUBMIT_ADD_CONTACT: {
      const newContact = {
        ...state.contact,
        id: uuidv4(),
      };
      return {
        ...state,
        listContact: [...state.listContact, newContact],
        contact: {
          ...state.contact,
          surname: "",
          name: "",
          company: "",
          telephone: "",
          iphone: "",
          note: "",
        },
      };
    }

    case HANDLE_CLEAR_FORM_DATA:
      return {
        ...state,
        contact: {
          ...state.contact,
          surname: "",
          name: "",
          company: "",
          telephone: "",
          iphone: "",
          note: "",
        },
      };

    case HANDLE_SUBMIT_EDIT_CONTACT: {
      const contact = action.data;
      const newListContact = state.listContact.map((it, index) => {
        if (it.id === contact.id) {
          return contact;
        }
        return it;
      });

      return {
        ...state,
        listContact: newListContact,
      };
    }

    case HANDLE_DELETE_ITEM: {
      const listContactDelete = state.listContact.filter((it, index) => {
        if (it.id !== action.data.id) {
          return true;
        }
        return false;
      });
      return {
        ...state,
        listContact: listContactDelete,
      };
    }

    default:
      return state;
  }
};

export default phoneBookReducer;
