import {
   HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT_ADD_CONTACT, 
    HANDLE_CLEAR_FORM_DATA,
    HANDLE_SUBMIT_EDIT_CONTACT, 
    HANDLE_DELETE_ITEM,
} from './constant';

export const onInputChange = data => {
  return {
    type: HANDLE_INPUT_CHANGE,
    data,
  }
}

export const submitAddContact = () => {
  return {
    type: HANDLE_SUBMIT_ADD_CONTACT,
  }
}

export const clearFormData = () => {
  return {
    type: HANDLE_CLEAR_FORM_DATA,
  }
}

export const onSubmitEditContact = data => {
  return {
    type: HANDLE_SUBMIT_EDIT_CONTACT,
    data
  }
}

export const onDeleteContact = data => {
  return {
    type: HANDLE_DELETE_ITEM,
    data
  }
}
