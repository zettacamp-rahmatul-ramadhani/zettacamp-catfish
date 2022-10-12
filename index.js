const song = [
    {
        name: "Song 1",
        duration: 270,
        artist: "a",
        genre: "pop"
    },{
        name: "Song 2",
        duration: 5400,
        artist: "c",
        genre: "pop"
    },{
        name: "Song 3",
        duration: 8400,
        artist: "z",
        genre: "rock"
    },{
        name: "Song 4",
        duration: 1200,
        artist: "b",
        genre: "jazz"
    },{
        name: "Song 5",
        duration: 240,
        artist: "b",
        genre: "rock"
    }
]

const groupArtist = (song) => {
    let artist = []
    let result = {}
    for (const iterator of song) {
        artist.push(iterator.artist)
    }
    artist = [...new Set(artist)]
    artist.forEach(element => {
        let item = []
        for (const iterator of song) {
            if (iterator.artist === element) {
                item.push(iterator)
            }
        }
        result["Song by artist " + element] = item
    });
    return result
}

const groupGenre = (song) => {
    let genre = []
    let result = {}
    for (const iterator of song) {
        genre.push(iterator.genre)
    }
    genre = [...new Set(genre)]
    genre.forEach(element => {
        let item = []
        for (const iterator of song) {
            if (iterator.genre === element) {
                item.push(iterator)
            }
        }
        result["Song by genre " + element] = item
    });
    return result
}

const groupDuration = (song, duration) => {
    let group = []
    for (const iterator of song) {
        if (iterator.duration < duration) {
            group.push(iterator)
        }
    }
    if (group.length === 0) {
        return "There is no song duration less than 1 hour!"
    }
    return group
}
console.log("\nSong by artist : ");
console.log(groupArtist(song));

console.log("\nSong by genre : ");
console.log(groupGenre(song));

let duration = 3600
console.log("\nSong by duration less than %d in second", duration);
console.log(groupDuration(song, duration));