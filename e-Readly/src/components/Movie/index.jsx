/* eslint-disable react/prop-types */
const Movie = (props) => {
  return (
    <div className="iamge_movies">
          <div className="image_3">
            <img src={`images/${props.thumbnail}`} className="image" style={{width: '100%'}} />
            <div className="middle">
              <div className="playnow_bt"><a href="/bookProfile">Play Now</a></div>
            </div>
          </div>
          <h1 className="code_text">{props.title}</h1>
          <p className="there_text">{props.author}</p>
          <div className="star_icon">
            <ul>
              <li><a href="#"><img src="images/star-icon.png" /></a></li>
              <li><a href="#"><img src="images/star-icon.png" /></a></li>
              <li><a href="#"><img src="images/star-icon.png" /></a></li>
              <li><a href="#"><img src="images/star-icon.png" /></a></li>
              <li><a href="#"><img src="images/star-icon.png" /></a></li>
            </ul>
          </div>
        </div>
   
  )
}

export default Movie