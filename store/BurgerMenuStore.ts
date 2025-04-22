import { makeAutoObservable } from "mobx";

class BurgerMenuStore {
  constructor() {
    makeAutoObservable(this);
  }

  isMenuOpened = false;

  changeIsMenuOpened = (isOpened: boolean) => {
    this.isMenuOpened = isOpened;
  };
}

export const burgerMenuStore = new BurgerMenuStore();
