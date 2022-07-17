const MovieCard = (movieData) => {
  const { title, overview, poster_path } = movieData;
  return (
    <div className="row">
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body bg-primary">
            <h5
              className="card-title text-center  text-light"
              style={{ height: "3rem" }}
            >
              {title}
            </h5>
            <p className="card-text text-hover">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
