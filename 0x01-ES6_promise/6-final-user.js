import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => [
      {
        status: results[0].status,
        value: results[0].status === 'fulfilled' ? results[0].value : results[0].reason,
      },
      {
        status: results[1].status,
        value: results[1].status === 'fulfilled' ? results[1].value : results[1].reason,
      },
    ]);
}
