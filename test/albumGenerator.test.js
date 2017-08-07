const expect = require('chai').expect;
const albumGenerator = require('../helpers/albumGenerator');

describe('albumGenerator', function () {

  it('should generate albums', function () {

    const albums = albumGenerator(10);

    expect(albums).to.have.lengthOf(10);

  });

  it('should contain correct properties', function(){

    const albums = albumGenerator(10);

    albums.forEach((album) => {
      expect(album).to.have.property('artist');
      expect(album).to.have.property('album');
      expect(album).to.have.property('songs');
    });

  });

  it('songs properties should contain an array with objects', function(){

    const albums = albumGenerator(10);

    albums.forEach(({songs}) => {
      songs.forEach( (song) => {
        expect(song).to.be.an('object');
        expect(song).to.have.property('title');
        expect(song).to.have.property('duration');
      });
    });

  });

});
