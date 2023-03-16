Sure, here's a task that involves all the requirements you mentioned:

Create a simple movie search application using React that allows users to search for movies by title. The application should use the Fetch API to fetch data from the OMDB API (http://www.omdbapi.com/). The user should be able to type a search query into a form element, which will be sent to the API as a query parameter. The API will return a list of movies that match the search query, which should be displayed as a list of cards on the page.

Each card should display the movie's title, year of release, poster image, and plot summary. The cards should also have a "details" button that, when clicked, expands the card to display additional details about the movie, such as the director, actors, and ratings.

Users should be able to click on a movie poster to mark it as a favorite. Favorited movies should be displayed at the top of the list, and their cards should be styled differently than non-favorited movies.

Finally, the application should use the Context API to store the user's favorites list and make it accessible to all components that need it.

Here's an outline of the steps you can follow to implement this application:

Create a new React project using your preferred toolchain (e.g. create-react-app).

Create a new component called "SearchForm" that renders a form element with an input field and a submit button. When the user submits the form, the component should call a function passed down as a prop with the search query entered by the user.

Create a new component called "MovieList" that renders a list of movie cards. The component should accept an array of movie objects as a prop, loop through them, and render a "MovieCard" component for each movie.

Create a new component called "MovieCard" that renders a card with the movie's title, year, poster, and plot summary. The component should also have a "details" button that expands the card to show additional details.

Add a "favorite" button to the MovieCard component. When clicked, the button should toggle the movie's "favorite" status and update the favorites list stored in the Context API.

Create a new component called "FavoritesList" that renders a list of favorite movies. The component should use the Context API to access the user's favorites list and render a "MovieCard" component for each favorite movie.

Create a new Context API called "FavoritesContext" that stores the user's favorites list and provides a way to update it.

Pass the "search" and "favorites" functions down to the "SearchForm", "MovieList", "MovieCard", and "FavoritesList" components using props.

Update the "App" component to render the "SearchForm", "MovieList", and "FavoritesList" components.

Implement the fetch call to the OMDB API in the "search" function passed down to the "SearchForm" component. The function should call the API with the search query entered by the user, and update the state of the "App" component with the results.

Update the "MovieCard" component to display different styles depending on whether the movie is favorited or not.

Implement the Context API to store the user's favorites list and make it accessible to all components that need it.

Good luck and have fun learning React!