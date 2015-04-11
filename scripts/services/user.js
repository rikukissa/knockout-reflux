const mockUsers = [
  {name: 'Janne'},
  {name: 'Hannu'},
  {name: 'Sami'},
  {name: 'Tommi'}
];

export const getUsers = function(callback) {
  setTimeout(function() {
    callback(null, mockUsers);
  }, 300);
};
