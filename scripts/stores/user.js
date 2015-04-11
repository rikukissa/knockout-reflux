import Reflux from 'reflux';
import userActions from '../actions/user';

let data = {
  users: []
};

export default Reflux.createStore({
  init: function() {
    this.listenToMany(userActions);
  },
  getUsers() {
    return data.users;
  },
  onFetchUsersCompleted(users) {
    data.users = users;
    this.trigger();
  },
  onCreateUser(user) {
    data.users.push(user);
    this.trigger();
  }
});
