import { useState } from "react";
import Header from "../../components/Header";
import { readData, updateData } from "../../config/Firebase"; // Pastikan jalur impor sesuai

const Form = () => {
  const [bookData, setBookData] = useState({
    name: "",
    bookTitle: "",
    synopsis: "",
    genre: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookId = "exampleBookId"; // Ganti dengan ID buku yang ingin Anda perbarui
    const updatedData = { ...bookData };

    // Update data di Firebase
    await updateData(bookId, updatedData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRead = async () => {
    const bookId = "exampleBookId"; // Ganti dengan ID buku yang ingin Anda baca
    const data = await readData(bookId);
    if (data) {
      setBookData(data); // Menampilkan data yang dibaca dari Firebase ke form
    }
  };

  return (
    <div>
      <Header />
      <h2>Enter Your Book&apos;s Information</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Your Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="bookTitle">Book Title:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="bookTitle"
                  name="bookTitle"
                  value={bookData.bookTitle}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="synopsis">Synopsis:</label>
              </td>
              <td>
                <textarea
                  id="synopsis"
                  name="synopsis"
                  rows="5"
                  value={bookData.synopsis}
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="genre">Genre:</label>
              </td>
              <td>
                <select
                  id="genre"
                  name="genre"
                  value={bookData.genre}
                  onChange={handleChange}
                >
                  <option value="">Select Genre</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Sci-fi">Sci-fi</option>
                  <option value="Romance">Romance</option>
                  <option value="Educational">Educational</option>
                  <option value="Theology">Theology</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">Publish</button>
        </div>
      </form>

      <div>
        <button onClick={handleRead}>Read Book Info</button>
      </div>
    </div>
  );
};

export default Form;
