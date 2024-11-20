import Header from "../../components/Header";

const Publish = () => {
  return (
    <div>
      <Header />
      <div className="main_content">
        <div className="cooming_section layout_padding">
            <div className="col-md-6"  style={{display: 'block', margin: '-125px auto 0 auto'}}>
              <div className="image_17">
                <img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2017/06/20/00/03/14/87b6c6e0-93f5-41eb-ae68-7dc1aed816d8/bookleftalign.png" alt="Book" />
              </div>
              <div className="col-md-6" >
                <h1 className="number_text">New!</h1>
                <h1 className="Cooming_soon_taital" style={{width: '500px'}}>Want to publish your own book?</h1>
                <p className="long_text_1">Try now and publish your book here for free.</p>
                <div className="paly_bt">
                  <a href="/publish/form">Click here!</a>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default Publish;
