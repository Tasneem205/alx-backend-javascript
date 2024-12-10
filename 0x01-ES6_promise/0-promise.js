function getResponseFromAPI() {
  const myProm = new Promise(() => {
    console.log('No API found');
  });
  return myProm;
}

exports.getResponseFromAPI = getResponseFromAPI;
