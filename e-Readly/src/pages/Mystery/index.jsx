import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import { getDatabase, ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";

const Mystery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const movieRef = ref(db, "books/");
    onValue(movieRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMovies(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
      }
    });
  }, []);

  const renderBooksByGenre = (genre) => {
    return movies
      .filter((item) => item.genre === genre)
      .map((item) => (
        <Movie
          key={item.id}
          thumbnail={item.thumbnail}
          title={item.title}
          author={item.author}
        />
      ));
  };

  return (
    <div>
      {/* Header Section */}
      <Header catalog="active" />

      {/* Movies Section */}
      <div className="movies_section layout_padding">
        <div className="container">
          <div className="movies_menu">
            <ul>
              <li>
                <Link to="/catalog">Overview</Link>
              </li>
              <li className="active">
                <Link to="/mystery">Mystery</Link>
              </li>
              <li>
                <Link to="/sci-fi">Sci-fi</Link>
              </li>
              <li>
                <Link to="/romance">Romance</Link>
              </li>
              <li>
                <Link to="/educational">Educational</Link>
              </li>
              <li>
                <Link to="/theology">Theology</Link>
              </li>
            </ul>
          </div>

          <div className="movies_section_2 layout_padding">
            <h2 className="letest_text">Mystery</h2>
            <div className="movies_main">
              <div className="iamge_movies_main">
                {renderBooksByGenre("mystery")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/tv">TV</Link>
              </li>
              <li>
                <Link to="/celebs">Celebs</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
          <div className="social_icon">
            <ul>
              <li>
                <a href="#">
                  <img src="images/fb-icon.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/twitter-icon.png" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/linkedin-icon.png" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/instagram-icon.png" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright_section">
        <div className="container">
          <div className="copyright_text">
            Copyright 2019 All Right Reserved By{" "}
            <a href="https://html.design">Free html Templates</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mystery;
