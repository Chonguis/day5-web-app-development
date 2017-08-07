const albums = [
  {
    artist: 'Artist name',
    album: 'Album name',
    songs: [
      {title: 'Song title 1', duration: 360},
      {title: 'Song title 2', duration: 360},
      {title: 'Song title 3', duration: 360}
    ]
  }
]

const albumGenerator = (numberAlbums) => {
  let arr = [];
  for (var i = 0; i < numberAlbums; i++) {
    arr.push({
      id: `${i + 1}`,
      artist: `Artist name`,
      album: `Album name`,
      songs: songGenerator(10)
    });
  }
  return arr;
};

const songGenerator = (songQuantity) => {
  let songArr = [];
  for (var i = 0; i < songQuantity; i++) {
    const num = i + 1;
    songArr.push({
      title: `Song #${num}`,
      duration: 240
    });
  }
  return songArr;
}

module.exports = {albumGenerator, songGenerator};
