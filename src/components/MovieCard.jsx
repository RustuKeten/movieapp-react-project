const MovieCard = (movieData) => {
  const { title, overview, poster_path } = movieData;
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
            <p className="overview card-text text-hover">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

// <div class="container">
//   <div class="row">
//     <div class="col-md-4">
//       <div class="content">
//         <div class="content-overlay"></div>{" "}
//         <img
//           class="content-image"
//           src="https://i.imgur.com/7cNRozs.jpg"
//         />
//         <div class="content-details fadeIn-bottom">
//           <h3 class="content-title">Geysers Valley Hotel</h3>
//           <p class="content-text">
//             <i class="fa fa-map-marker"></i> Russia
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
