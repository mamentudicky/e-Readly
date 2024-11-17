import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useEffect, useState } from "react";
import Movie from "../../components/Movie"
import { getDatabase, ref, onValue} from "firebase/database";
import Fade from 'react-reveal/Fade'

const HomePage = () => {
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
  <Header home="active"/>
  {/* header section end */}
  {/* movies section start */}
  <div className="movies_section layout_padding">
    <div className="container">
      <Fade bottom>
      <img src="images/eReadElite.jpg" style={{display: 'block', margin: '0 auto', width: '200px', marginBottom: '100px'}} />
        
      </Fade>
      <Fade bottom delay={500}>
      <h2 className="subtitle">Recommendations</h2>

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

  {/* cooming  section start */}
  <div className="cooming_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image_17">
            <div className="image_17"><img src="images/eReadElite.jpg" style={{display: 'block', marginLeft: '450px'}}/></div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  {/* cooming  section end */}
  {/* footer  section start */}
  <Footer />
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

export default HomePage