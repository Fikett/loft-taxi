import { ISelectItem } from "@common";
import _ from "lodash";
import { createSelector } from "reselect";

export const selectAddressesList = createSelector<any, any, ISelectItem[]>(
  ({ routes }) => routes.addressesList,
  (addressesList) => {
    let a = _.map(addressesList, (item) => {
      return { label: item, value: item };
    });

    return a;
  }
);

export const selectcurrentRoute = createSelector<any, any, Array<number[]>>(
  ({ routes }) => routes.currentRoute,
  (currentRoute) => currentRoute
);
