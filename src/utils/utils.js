export default async function login({ email, password }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email == "admin@mail.com" && password == "admin")
        resolve({ login: true });
      else resolve({ error: true });
    }, 2000);
  });
}
