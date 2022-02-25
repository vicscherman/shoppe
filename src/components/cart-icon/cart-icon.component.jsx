import React from "react";
import {  useSelector, useDispatch } from "react-redux";


import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { CartIconContainer, ItemCount, CartLogo } from "./cart-icon.styles";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();

  return (
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <CartLogo />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
