import Header from "../../components/Header"

const Form = () => {
  return (
    <div>
        <Header />
        <div className="login_form" style={{ margin: '100px', width: '1320px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', color: 'black'}}>
            <h2>Enter Your Book&apos;s Information</h2>
            <form>
              <label htmlFor="name">Your name:</label><br />
              <input type="text" id="name" name="name" style={{ color: 'black', border: '1px solid black', backgroundColor: 'transparent'}} /><br /><br />

              <label htmlFor="bookTitle">Book Title:</label><br />
              <input type="text" id="bookTitle" name="bookTitle" style={{ color: 'black', border: '1px solid black', backgroundColor: 'transparent' }} /><br /><br />

              <label htmlFor="bookTitle">Synopsis:</label><br />
              <textarea name="" id="" cols="50" rows="10" style={{display: 'block', color: 'black', margin: '0 auto', backgroundColor: 'transparent'}}></textarea>

              <label htmlFor="genre">Genre:</label><br />
              <select id="genre" name="genre">
                <option value="">Select Genre</option>
                <option value="Mystery">Mystery</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Romance">Romance</option>
                <option value="Educational">Educational</option>
                <option value="Theology">Theology</option>
              </select><br /><br />

              <input type="submit" value="Publish" style={{ color: 'black', border: '2px solid black'}} />
            </form>
          </div>
    </div>
  )
}

export default Form