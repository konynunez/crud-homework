class Show {
  constructor(title, year, genre, episodes) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.episodes = episodes;

    this.borrowShow = function () {
      if (this.episodes > 0) {
        this.episodes -= 1;
      } else if (this.episodes == 0) {
        console.log(`No more episodes ${this.title}`);
      }
    };
    
    this.returnShow = function () {
      this.episodes += 1;
    };
  }
}

class List {
  constructor(name, shows) {
    //String name
    this.title = title;
    //Array of book objects
    this.shows = shows;
    // Function to add a book to the Library
    this.addShows = function (newShow) {
      const oldBook = this.books.find(
        (show) =>
          show.genre.toLowerCase() == newShow.genre.toLowerCase() &&
          show.title.toLowerCase() == newShow.title.toLowerCase()
      );
      if (oldShow != undefined) {
        oldShow.episodes += newShow.episodes;
      } else {
        this.shows.push(newShow);
      }
    };
    //Function to remove a show from the list using the genre.
    this.removeShow = function (genre) {
      const show = this.shows.find(
        (show) => show.genre.toLowerCase() == genre.toLowerCase()
      );
      this.shows.splice(show, 1);
    };
    //Function to find a show by the name of the show.
    this.findShowByTitle = function (searchedName) {
      const matchedShow = this.shows.find(
        (show) => show.title.toLowerCase() == searchedName.toLowerCase()
      );
      //If the show is found return the show
      if (matchedShow != undefined) {
        return matchedShow;
      } else {
        //Log if no show is found
        console.log(`No show found with a name of ${searchedName}`);
      }
    };
    //Function to display the details of all shows in the List.
    this.listAllShows = function () {
      this.shows.forEach((show) => {
        console.log(`title: ${show.title}
Year: ${show.year}
Genre: ${show.genre}
episodes: ${show.episodes}
`);
      });
    };
  }
}

export { Show, List };