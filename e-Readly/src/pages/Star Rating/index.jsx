import React, { useEffect } from 'react';

const StarRating = (props) => {
  useEffect(() => {
    const Allstars = document.querySelectorAll('.Star'); // Gunakan ".Star" karena kelasnya adalah "Star" bukan "star"

    Allstars.forEach((star, i) => {
      star.onclick = function () {
        let current_star_level = i + 1;

        Allstars.forEach((star, j) => {
          if (current_star_level >= j + 1) {
            star.innerHTML = '★'; // Menggunakan karakter bintang solid
          } else {
            star.innerHTML = '☆'; // Menggunakan karakter bintang kosong
          }
        });
      };
    });
  }, []); // useEffect dependency array is empty to run only once when component mounts

  return (
    <div className="StarBottom">
      <button className="Star">☆</button>
      <button className="Star">☆</button>
      <button className="Star">☆</button>
      <button className="Star">☆</button>
      <button className="Star">☆</button>
    </div>
  );
};

export default StarRating;