export const signup = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user},
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/sessions',
    data: {user},
    success,
    error
  });
};

export const logout = (user, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: '/api/sessions/' + user.id,
    success,
    error
  });
};
