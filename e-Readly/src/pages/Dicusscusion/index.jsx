import Header from "../../components/Header"

const Discussion = () => {
  return (
    <div>
        <div>
  {/* header section start */}
  <Header discussion="active"/>
  {/* header section end */}
  {/* arrival section start */}
  <header>
    <div className="search-box">
      <div>
        <select name id>
          <option value="Everything">Everything</option>
          <option value="Titles">Most Viewed</option>
          <option value="Description">Newest</option>
        </select>
        <input type="text" name="q" placeholder="search ..." />
        <button><i className="fa fa-search" /></button>
      </div>
    </div>
  </header>
  <div className="movies_section layout_padding">
  <div className="discussion">
  <div className="container">
    <div className="subforum">
      <div className="subforum-title">
        <h1>Mystery Books</h1>
      </div>
      <div className="subforum-row">
        <div className="subforum-description subforum-column">
          <h4><a href="./discussion/discussion2">The Da Vinci Code</a></h4>
          <p>Description: A gripping mystery that combines art, history, and symbolism.</p>
        </div>
        <div className="subforum-stats subforum-column center">
          <span>50 Posts | 25 Topics</span>
        </div>
        <div className="subforum-info subforum-column">
          <b><a href>Last post</a></b> by <a href>MysteryReader</a>
          <br />on <small>1 Jan 2023</small>
        </div>
      </div>
      {/* Add more mystery book entries as needed or wanted */}
    </div>
    <div className="subforum">
      <div className="subforum-title">
        <h1>Sci-Fi Books</h1>
      </div>
      <div className="subforum-row">
        <div className="subforum-description subforum-column">
          <h4><a href="./discussion/discussion2">Dune</a></h4>
          <p>Description: Explore the epic world of Arrakis and the spice melange in this classic sci-fi novel.</p>
        </div>
        <div className="subforum-stats subforum-column center">
          <span>40 Posts | 20 Topics</span>
        </div>
        <div className="subforum-info subforum-column">
          <b><a href>Last post</a></b> by <a href>SciFiEnthusiast</a>
          <br />on <small>5 Jan 2023</small>
        </div>
      </div>
      {/* Add more sci-fi book entries as needed */}
    </div>
    <div className="subforum">
      <div className="subforum-title">
        <h1>Romance Books</h1>
      </div>
      <div className="subforum-row">
        <div className="subforum-description subforum-column">
          <h4><a href="./discussion/discussion2">Pride and Prejudice</a></h4>
          <p>Description: A timeless romance novel that explores themes of love and social expectations.</p>
        </div>
        <div className="subforum-stats subforum-column center">
          <span>30 Posts | 15 Topics</span>
        </div>
        <div className="subforum-info subforum-column">
          <b><a href>Last post</a></b> by <a href>RomanceLover</a>
          <br />on <small>10 Jan 2023</small>
        </div>
      </div>
      {/* Add more romance book entries as needed */}
    </div>
    <div className="subforum">
      <div className="subforum-title">
        <h1>Educational Books</h1>
      </div>
      <div className="subforum-row">
        <div className="subforum-description subforum-column">
          <h4><a href="./discussion/discussion2">Sapiens: A Brief History of Humankind</a></h4>
          <p>Description: An educational journey through the history of human evolution and societies.</p>
        </div>
        <div className="subforum-stats subforum-column center">
          <span>20 Posts | 10 Topics</span>
        </div>
        <div className="subforum-info subforum-column">
          <b><a href>Last post</a></b> by <a href>KnowledgeSeeker</a>
          <br />on <small>15 Jan 2023</small>
        </div>
      </div>
      {/* Add more educational book entries as needed */}
    </div>
    <div className="subforum">
      <div className="subforum-title">
        <h1>Theology Books</h1>
      </div>
      <div className="subforum-row">
        <div className="subforum-description subforum-column">
          <h4><a href="./discussion/discussion2">Mere Christianity</a></h4>
          <p>Description: C.S. Lewis explores fundamental Christian theology in this thought-provoking work.</p>
        </div>
        <div className="subforum-stats subforum-column center">
          <span>15 Posts | 8 Topics</span>
        </div>
        <div className="subforum-info subforum-column">
          <b><a href>Last post</a></b> by <a href>TheologyReader</a>
          <br />on <small>20 Jan 2023</small>
        </div>
      </div>
      {/* Add more theology book entries as needed */}
    </div>
  </div></div>
  </div>
  {/* arrival section end */}
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
  {/* copyright section end */}
</div>

    </div>
  )
}

export default Discussion