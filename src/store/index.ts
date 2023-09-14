import {makeObservable, observable, action} from 'mobx';

class UserStore {
  token = '';
  userId = '';

  constructor() {
    makeObservable(this, {
      token: observable,
      setData: action,
      resetData: action,
    });
  }

  setData(token: string, _id: string) {
    this.token = token;
    this.userId = _id;
  }

  resetData() {
    this.token = '';
    this.userId = '';
  }
}

const store = new UserStore();

export default store;
