$(function(){
    let movieId = 1;
    let moviesList = [];

    $('#movieForm').on('submit',(evt)=>{
        evt.preventDefault();
        //save title
        let title = $('#movieTitle').val();
        //save rating
        let rating = $('#movieRating').val();
        let movie = {movieId,title,rating};
        moviesList.push(movie);
        movieId+=1;
        const movieHTML = createMovieHTML(movie);
        addMovieToDOM(movieHTML);
    });

    $("tbody").on("click", ".btn.btn-danger", function(evt) {
        console.log(evt.target);
        // $(evt.target.parentElement).remove();
        const movieIndex = moviesList.findIndex(movie => movie.id === evt.target.id);
        moviesList.splice(movieIndex,1);
        // remove it from the DOM
        $(evt.target)
        .closest("tr")
        .remove();
    });

    function addMovieToDOM(movieHTML){
        $("#moviesTable tbody").append(movieHTML);
        $("#movieForm").trigger("reset");
    }

    function createMovieHTML(movie){
        return `
          <tr>
            <td>${movie.title}</td>
            <td>${movie.rating}</td>
            <td>
              <button class="btn btn-danger" id=${movie.currentId}>
                Delete
              </button>
            </td>
          <tr>
        `;
    }
});