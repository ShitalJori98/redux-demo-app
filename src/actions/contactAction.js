import {
    CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT
  } from "../constant/types";
// actions
export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact,
  });


  //get a contact to edit
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id
  })

  //to upadte edited data we need this method
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
  });
  
  