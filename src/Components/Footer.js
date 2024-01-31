<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY5V10MzVYxPbYB/6EGGoI1Wt1P2D2S9I5qV"
    crossorigin="anonymous"></link>
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/feed/" target="_blank">
          Himanshu Rai
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;