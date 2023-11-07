import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <img src="src/assets/logo.svg" alt="studio ghibli logo" />

          <div className="social-medias">
            <img src="src/assets/facebook.svg" alt="facebook link" />
            <img src="src/assets/instagram.svg" alt="instagram link" />
            <img src="src/assets/twitter.svg" alt="x link" />
            <img src="src/assets/youtube.svg" alt="youtube lik" />
          </div>
        </div>
      </div>
    </>
  );
}
