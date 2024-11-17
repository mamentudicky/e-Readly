import Header from "../../components/Header"
import { useEffect, useState } from "react";
import Movie from "../../components/Movie"
import { getDatabase, ref, onValue} from "firebase/database";
import Fade from 'react-reveal/Fade'

const Catalog = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const movieRef = ref(db, "books/");
    onValue(movieRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setMovie(Object.keys(data).map(key => data[key]));
    });
  }, [])

  const getBook = (genre) => {
    return movie.map((item) => {
      if (item.genre === genre) {
        return (<Movie key={item.id} thumbnail={item.thumbnail} title={item.title} author={item.author} />);
      }
    })
  }

  return (
    <div>
       <div>
  {/* header section start */}
  <Header catalog="active"/>
  {/* header section end */}
  {/* movies section start */}
  <div className="movies_section layout_padding">
    <div className="container">
      <Fade bottom>
        <div className="movies_menu">
          <ul>
            <li className="active"><a href="/catalog">Overview</a></li>
            <li><a href="/mystery">Mystery</a></li>
            <li><a href="/sci-fi">Sci-fi</a></li>
            <li><a href="/romance">Romance</a></li>
            <li><a href="/educational">Educational</a></li>
            <li><a href="/theology">Theology</a></li>
          </ul>
        </div>
      </Fade>
      <Fade bottom delay={1000}>
        <div className="movies_section_2 layout_padding">
          <h2 className="letest_text">Mystery</h2>
          <div className="seemore_bt"><a href="/mystery">See More</a></div>
          <div className="movies_main">
            <div className="iamge_movies_main">
              {getBook("mystery")}
              {getBook("mystery")}
              {getBook("mystery")}
              {getBook("mystery")}
              {getBook("mystery")}
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom delay={1000}>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Science Fiction</h2>
        <div className="seemore_bt"><a href="/sci-fi">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
          {getBook("sci-fi")}
          {getBook("sci-fi")}
          {getBook("sci-fi")}
          {getBook("sci-fi")}
          {getBook("sci-fi")}
          </div>
        </div>
      </div>
      </Fade>
      <Fade bottom delay={1000}>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Romance</h2>
        <div className="seemore_bt"><a href="/romance">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
          {getBook("romance")}
          {getBook("romance")}
          {getBook("romance")}
          {getBook("romance")}
          {getBook("romance")}
          </div>
        </div>
      </div>
      </Fade>
      <Fade bottom delay={1000}>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Educational</h2>
        <div className="seemore_bt"><a href="/educational">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
          {getBook("educational")}
          {getBook("educational")}
          {getBook("educational")}
          {getBook("educational")}
          {getBook("educational")}
          </div>
        </div>
      </div>
      </Fade>
      <Fade bottom delay={1000}>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Theology</h2>
        <div className="seemore_bt"><a href="/theology">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
          {getBook("theology")}
          {getBook("theology")}
          {getBook("theology")}
          {getBook("theology")}
          {getBook("theology")}
          </div>
        </div>
      </div>
      </Fade>

      <div className="seebt_1"><a href="#">See More</a></div>
    </div>
  </div>
  {/* movies section end */}
  {/* footer  section start */}
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="footer_menu">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="movies.html">Movies</a></li>
          <li><a href="tv.html">TV</a></li>
          <li><a href="celebs.html">Celebs</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </div>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src="images/fb-icon.png" /></a></li>
          <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
          <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
          <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
        </ul>
      </div>
    </div>
  </div>
  {/* footer  section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <div className="copyright_text">Copyright 2019 All Right Reserved By <a href="https://html.design">Free html Templates</a></div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Catalog