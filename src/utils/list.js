class Show {
  constructor(title, year, genre, episodes) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.episodes = episodes;
  }

  borrowShow() {
    if (this.episodes > 0) {
      this.episodes -= 1;
    } else if (this.episodes === 0) {
      console.log(`No more episodes of ${this.title}`);
    }
  }

  returnShow() {
    this.episodes += 1;
  }
}

class List {
  constructor(name, shows = []) {
    this.name = name;
    this.shows = shows;
  }

  addShow(newShow) {
    const oldShow = this.shows.find(
      (show) =>
        show.genre.toLowerCase() === newShow.genre.toLowerCase() &&
        show.title.toLowerCase() === newShow.title.toLowerCase()
    );
    if (oldShow !== undefined) {
      oldShow.episodes += newShow.episodes;
    } else {
      this.shows.push(newShow);
    }
  }

  removeShow(genre) {
    const showIndex = this.shows.findIndex(
      (show) => show.genre.toLowerCase() === genre.toLowerCase()
    );
    if (showIndex !== -1) {
      this.shows.splice(showIndex, 1);
    } else {
      console.log(`No show found with genre of ${genre}`);
    }
  }

  findShowByTitle(searchedName) {
    const matchedShow = this.shows.find(
      (show) => show.title.toLowerCase() === searchedName.toLowerCase()
    );
    if (matchedShow !== undefined) {
      return matchedShow;
    } else {
      console.log(`No show found with a name of ${searchedName}`);
      return null;
    }
  }

  listAllShows() {
    this.shows.forEach((show) => {
      console.log(`Title: ${show.title}
Year: ${show.year}
Genre: ${show.genre}
Episodes: ${show.episodes}`);
    });
  }
}

// Example usage
const myShow = new Show("Example Show", 2020, "Drama", 10);
const myList = new List("My Show List");
myList.addShow(myShow);
myList.listAllShows();

export { Show, List };
