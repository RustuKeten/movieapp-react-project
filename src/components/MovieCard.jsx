const MovieCard = (props) => {
  const { title, overview, poster_path } = props;
  return (
    <div className="card-body row">
      <div className="col">
        <div className="card" style={{ width: "15rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
            className="card-img-top"
            alt="..."
          />
          <div className="bg-primary">
            <h5
              className="card-title text-center  text-light"
              style={{ height: "3rem" }}
            >
              {title}
            </h5>
            <p className="overview card-text text-hover h-6">
              Overview:
              <br></br> {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
