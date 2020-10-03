import { createSelector } from "reselect";

const phoneBookDomain = (state) => state.phoneBookReducer;

export const getContactSelector = createSelector(
  phoneBookDomain,
  (state) => state.contact
);

export const getListContactSelector = createSelector(
  phoneBookDomain,
  (state) => state.listContact
);
