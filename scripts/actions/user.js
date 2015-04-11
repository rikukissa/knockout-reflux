import Reflux from 'reflux';
import { getUsers } from '../services/user';

const userActions = Reflux.createActions({
  fetchUsers: {
    asyncResult: true
  },
  createUser: {
    asyncResult: false
  }
});

userActions.fetchUsers.listen(function() {
  getUsers((err, users) => {
    if(err) {
      return this.failed(err);
    }
    this.completed(users);
  });
});

export default userActions;
