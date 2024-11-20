import Header from "../../components/Header";
import Footer from "../../components/Footer"
import LeftBookProfile from "../LeftBookProfile";

const BookProfile = () => {
    return (
      <>
        <Header/>
        <div  className="Teks" >
          <h1>Broken Monsters - Monster-Monster Rusak</h1>
          <h1> </h1>
          <h3> Author : Lauren Beukes , Translator : Lulu Fitri Rahman</h3>
          <h3>Sinopsis: </h3>
          <p>Sudah banyak mayat yang dilihat Detektif Gabriella Versado, tapi yang satu ini unik, menurut standar Detroit sekalipun: setengah bocah, setengah rusa. Seiring ditemukannya mayat-mayat lain yang makin aneh dan meresahkan, bagaimana kota itu bisa tetap berpegang pada realitas yang saat ini pun telah nyaris hancur?

Jika kau Layla, putri remaja Detektif Versado, kau “main-main” dengan orang yang bisa jadi merupakan predator online. Jika kau Jonno, jurnalis parowaktu yang putus asa, kau akan rela melakukan apa saja untuk mendapatkan akses eksklusif terhadap kisah yang mengerikan. Jika kau Thomas Keen, dikenal di jalanan sebagai TK, kau akan melakukan apa saja supaya keluarga tunawisma-mu tetap aman— dan menemukan monster yang terobsesi mimpi untuk menata ulang dunia dengan kejam.

“Sangat menakutkan dan mencekam.” - Stephen King</p>

          <h4> genres : Horror , Fiction , Mystery , Thriller , Crime , Fantasy. </h4>
          <h6>Publish : <p>First published July 31, 2014</p></h6>
          <a href="#" className="Jumlahrating">
            <div>
            <img src="images/rating.png" className="ratingImage"></img>
            </div>
            <div>
            <img src="images/command.png"className="commandimage"></img>
            </div>
          </a>
        </div>
        <div className="PosisiBook">
          <div>
            <a href="#" className="Profilbuku">
              <img src="images/mysteryBook.jpg" className="bukuMystery" alt="Mystery Book" />
            </a>
          </div>
          <LeftBookProfile/>
          <div className="FuterProfilBook">
          <Footer/>
          </div>
        
        </div>

      </>
    )
  }
  
  export default BookProfile
