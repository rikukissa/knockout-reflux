import ko from 'knockout';
import mapping from 'knockout.mapping';
import userStore from './stores/user';
import userActions from './actions/user';

export default class ViewModel {
  constructor() {
    mapping.fromJS(this.getState(), {}, this);
    this.inputtedUser = ko.observable();

    userStore.listen(this.update.bind(this));
    userActions.fetchUsers();
  }
  submit() {
    userActions.createUser({
      name: this.inputtedUser()
    });
    this.inputtedUser('');
  }
  update() {
    mapping.fromJS(this.getState(), this);
  }
  getState() {
    return {
      users: userStore.getUsers()
    };
  }
};
