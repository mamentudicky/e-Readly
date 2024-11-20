import Header from "../../components/Header"

const Discussion2 = () => {
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
  <div className="container">
    {/* Navigation */}
    <div className="navigate">
      <span><a href="/Discussion">Book Discussions - Forum</a> &gt;&gt; <a href="#">Mystery</a></span>
    </div>
    {/* Display book discussion posts */}
    <div className="posts-table">
      <div className="table-head">
        <div className="subjects">Book Titles</div>
        <div className="replies">Replies/Views</div>
        <div className="last-reply">Last Reply</div>
      </div>
      {/* Discussion posts start here */}
      <div className="table-row">
                <div className="subjects">
                  <a href="/discussion/discussion3">
                    Favorite Scenes and Quotes
                  </a>
                  <br />
                  <span>
                    Started by <b><a href>DaVinciFan123</a></b>.
                  </span>
                </div>
                <div className="replies">
                  5 replies <br /> 210 views
                </div>
                <div className="last-reply">
                  Nov 15, 2023
                  <br />By <b><a href>SymbolismSeeker</a></b>
                </div>
              </div>

              <div className="table-row">
                <div className="subjects">
                  <a href="/discussion/discussion3">
                    The Da Vinci Code: Fact or Fiction?
                  </a>
                  <br />
                  <span>
                    Started by <b><a href>HistoryBuff</a></b>.
                  </span>
                </div>
                <div className="replies">
                  8 replies <br /> 315 views
                </div>
                <div className="last-reply">
                  Nov 20, 2023
                  <br />By <b><a href>ConspiracyTheorist</a></b>
                </div>
              </div>

              <div className="table-row">
                <div className="subjects">
                  <a href="/discussion/discussion3">
                    Favorite Characters: Robert Langdon vs Teabing 
                  </a>
                  <br />
                  <span>
                    Started by <b><a href>CharacterAnalyzer</a></b>.
                  </span>
                </div>
                <div className="replies">
                  12 replies <br /> 420 views
                </div>
                <div className="last-reply">
                  Nov 25, 2023
                  <br />By <b><a href>LangdonDefender</a></b>
                </div>
              </div>

              <div className="table-row">
                <div className="subjects">
                  <a href="/discussion/discussion3">
                    Book vs Movie: Which was better?
                  </a>
                  <br />
                  <span>
                    Started by <b><a href>PageToScreen</a></b>.
                  </span>
                </div>
                <div className="replies">
                  6 replies <br /> 180 views
                </div>
                <div className="last-reply">
                  Nov 28, 2023
                  <br />By <b><a href>BookPurist</a></b>
                </div>
              </div>
              {/* Add more discussion posts as needed */}
              {/* Discussion posts end here */}
    </div>
    {/* Pagination starts */}
    <div className="pagination">
      Pages: <a href>1</a><a href>2</a><a href>3</a>
    </div>
    {/* Pagination ends */}
  </div>
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

export default Discussion2