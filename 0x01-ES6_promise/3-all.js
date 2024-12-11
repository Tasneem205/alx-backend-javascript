import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then(([photoResponse, userResponse]) => {
    // Log the required information
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  })
  .catch(() => {
    // Handle errors
    console.log('Signup system offline');
  });
}

export default handleProfileSignup;