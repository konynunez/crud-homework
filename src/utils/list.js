class Show {
  constructor(name, year, genre, cast, episodes) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.episodes = episodes;

    this.borrowShow = function () {
      if (this.episodes > 0) {
        this.episodes -= 1;
      } else if (this.episodes == 0) {
        console.log(`No more episodes to watch for ${this.name}`);
      }
    };

    this.returnShow = function () {
      this.episodes += 1;
    };
  }
}

class List {
  constructor(id, shows) {
    this.id = id;
    this.shows = shows;

    this.addShow = function (newShow) {
      const oldShow = this.shows.find(
        (show) =>
          show.name.toLowerCase() == newShow.name.toLowerCase() &&
          show.cast.toLowerCase() == newShow.cast.toLowerCase()
      );
      if (oldShow != undefined) {
        oldShow.episodes += newShow.episodes;
      } else {
        this.shows.push(newShow);
      }
    };

    this.findShowByName = function (searchedName) {
      const matchedShow = this.shows.find(
        (show) => show.name.toLowerCase() == searchedName.toLowerCase()
      );
      if (matchedShow) {
        return matchedShow;
      } else {
        console.log(`No show found with the name ${searchedName}`);
      }
    };

    this.listAllShows = function () {
      this.shows.forEach((show) => {
        console.log(
          `Name: ${show.name} Cast: ${show.cast} Year: ${show.year} Genre: ${show.genre} Episodes: ${show.episodes}`
        );
      });
    };
  }
}

export { Show, List };
