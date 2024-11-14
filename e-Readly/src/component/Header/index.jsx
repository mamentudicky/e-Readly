/* eslint-disable react/prop-types */
const Header = (props) => {
    return (
      <div>
          <div className="header_section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="logo" href="/"><img src="../../../public/images/e-Readly.jpg" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${props.home}`}>
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className={`nav-item ${props.catalog}`}>
              <a className="nav-link" href="/catalog">Catalog</a>
            </li>
            <li className={`nav-item ${props.discussion}`}>
              <a className="nav-link" href="/discussion">Discussion</a>
            </li>
            <li className={`nav-item ${props.publish}`}>
              <a className="nav-link" href="/publish">Publish</a>
            </li>
          </ul>
          
          <div className="search_icon"><a href="#"><img src="../images/search-icon.png" /><span className="padding_left_15">Search...</span></a></div>
        </div>
      </nav>
    </div>
      </div>
    )
  }
  
  export default Header