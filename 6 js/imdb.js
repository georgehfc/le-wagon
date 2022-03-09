// Write a JS script that iterates over the IMDB list
// of 10 top rated movies and then prints each title.

// Pseudocode:
// initialize 10 movies entries within map
// add each entry title & rating
// print each entry content

let movies = new Map ()

movies.set("The Shawshank Redemption", 9.2);
movies.set("The Godfather", 9.2);
movies.set("The Dark Knight", 9.0);
movies.set("The Godfather: Part II", 9.0);
movies.set("12 Angry Men", 9.0);
movies.set("Schindler's List", 8.9);
movies.set("The Lord of the Rings: The Return of the King", 8.9);
movies.set("Pulp Fiction", 8.9);
movies.set("The Lord of the Rings: The Fellowship of the Ring", 8.8);
movies.set("The Good, the Bad and the Ugly", 8.8);

// using foreach
movies.forEach(( value, key ) => {
  console.log("Title: " + key + " / Rating: " + value );
});

// using for
for (var [key, value] of movies) {
  console.log("Title: " + key + " / Rating: " + value )
}
