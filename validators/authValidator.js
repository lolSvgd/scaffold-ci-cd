export function validateUsername(username) {
  return typeof username === 'string' && /^[a-zA-Z0-9_]{3,16}$/.test(username);
}

export function validatePassword(password) {
  return typeof password === 'string' && password.length >= 6;
}
