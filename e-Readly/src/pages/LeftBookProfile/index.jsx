import StarRating from "../Star Rating";

const LeftBookProfile = (props) => {
  return (
    <div>
      <div>
        <button className="bottomBook">Want to Read?</button>
      </div>

      <div>
        <button className="bottomBook">buy $</button>
      </div>

      <StarRating />

      <div className="RevewBook">
        <textarea
          className="textbuttonarea"
          name="command"
          id="123"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <button className="buttonrevew">write review</button>
    </div>
  );
};

export default LeftBookProfile;
