import Header from "../../components/Header"

const Discussion3 = () => {
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
    <div className="DetailDiscussion">
          <div className="container">
            {/* Navigation */}
            <div className="navigate">
              <span><a href="/Discussion">Book Discussion - Forums</a>  &gt;&gt;  <a href="/Discussion/Discussion2">Mystery</a>  &gt;&gt;  <a href="#">The Da Vinci Code</a></span>
            </div>

            {/* Topic Section */}
            <div className="topic-container">
              {/* Original thread */}
              <div className="head">
                <div className="authors">Author</div>
                <div className="content">Topic: Unraveling The Da Vinci Code (Read 876 Times)</div>
              </div>

              <div className="body">
                <div className="authors">
                  <div className="username"><a href="">CodeBreaker</a></div>
                  <div>Cryptology Expert</div>
                  <img src="https://example.com/codebreaker-avatar.jpg" alt="" />
                  <div>Posts: <u>45</u></div>
                  <div>Points: <u>3210</u></div>
                </div>
                <div className="content">
                  Deciphering the mysteries hidden in The Da Vinci Code.
                  <br />Which aspect of the code intrigues you the most, and why?
                  <br /><br />
                  Lets decode the secrets together.
                  <br />
                  <hr />
                  Happy Decrypting, CodeBreaker
                  <br />
                  <div className="comment">
                    <button>Comment</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Area */}
            <div className="comment-area hide" id="comment-area">
              <textarea name="comment" id="" placeholder="Comment here..."></textarea>
              <input type="submit" value="Submit" />
            </div>

            {/* Comments Section */}
            <div className="comments-container">
              <div className="body">
                <div className="authors">
                  <div className="username"><a href="">ArtDetective</a></div>
                  <div>Art Historian</div>
                  <img src="https://example.com/artdetective-avatar.jpg" alt="" />
                  <div>Posts: <u>98</u></div>
                  <div>Points: <u>5678</u></div>
                </div>
                <div className="content">
                  The symbology in The Da Vinci Code is fascinating, especially when it comes to interpreting artworks.
                  <br />Whats your take on the artistic clues, CodeBreaker?
                  <br /><br />
                  <div className="comment">
                    <button>Reply</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reply Area */}
            <div className="comment-area hide" id="reply-area">
              <textarea name="reply" id="" placeholder="Reply here..."></textarea>
              <input type="submit" value="Submit" />
            </div>

            {/* Another Comment With Replies */}
            <div className="comments-container">
              <div className="body">
                <div className="authors">
                  <div className="username"><a href="">HistoryBuff</a></div>
                  <div>Archaeologist</div>
                  <img src="https://example.com/historybuff-avatar.jpg" alt="" />
                  <div>Posts: <u>210</u></div>
                  <div>Points: <u>8765</u></div>
                </div>
                <div className="content">
                  The historical references in The Da Vinci Code add a layer of authenticity to the narrative.
                  <br />Lets explore the historical context together!
                  <br /><br />
                  <div className="comment">
                    <button>Reply</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reply Area */}
            <div className="comment-area hide" id="reply-area">
              <textarea name="reply" id="" placeholder="Reply here..."></textarea>
              <input type="submit" value="Submit" />
            </div>

            {/* Add more discussions and comments as needed */}
          </div>
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
  );
}

export default Discussion3;