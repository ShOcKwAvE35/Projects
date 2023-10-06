const getRandomPhoto = async ({ query }) => {
  return await axios
    .get(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization:
          'aq7ofSfLPzdqsh1pzWr6CuyLp4vmBOZfg3WrwhbToMrUjniCPM2M8ZHV'
      }
    })
    .then((response) => {
      return response.data.photos[
        Math.floor(Math.random() * response.data.photos.length)
      ].src.original;
    })
    .catch((err) => {
      return err;
    });
};
