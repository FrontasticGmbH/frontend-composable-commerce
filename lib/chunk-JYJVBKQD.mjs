import {
  getAccountActions
} from "./chunk-MV5NDRI7.mjs";
import {
  getCartActions
} from "./chunk-MIYJWH5T.mjs";
import {
  getProductActions
} from "./chunk-QHYL7UUU.mjs";
import {
  getProjectActions
} from "./chunk-VHBV2HVS.mjs";
import {
  getWishlistActions
} from "./chunk-N4MZBA3A.mjs";

// src/library/Integration.ts
import { Integration } from "@commercetools/frontend-sdk";
var ComposableCommerce = class extends Integration {
  constructor(sdk) {
    super(sdk);
    this.project = getProjectActions(sdk);
    this.product = getProductActions(sdk);
    this.cart = getCartActions(sdk);
    this.wishlist = getWishlistActions(sdk);
    this.account = getAccountActions(sdk);
  }
  unregisterExtension() {
  }
  project;
  product;
  cart;
  wishlist;
  account;
};

export {
  ComposableCommerce
};
//# sourceMappingURL=chunk-JYJVBKQD.mjs.map