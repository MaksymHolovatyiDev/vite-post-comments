import {makeObservable, observable, computed, action} from 'mobx';

class UserStore {
  token = '';

  constructor() {
    makeObservable(this, {
      token: observable,
      getToken: computed,
      setToken: action,
      resetToken: action,
    });
  }

  get getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  resetToken() {
    this.token = '';
  }
}

const store = new UserStore();

export default store;
