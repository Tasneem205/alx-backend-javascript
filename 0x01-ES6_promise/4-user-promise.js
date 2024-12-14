export default function signUpUser(firstName, lastName) {
  const ans = new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
  return ans;
}
