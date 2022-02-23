import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});



export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    const snapShot = await collectionRef.get();

    try {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message));
    }
  };
};

