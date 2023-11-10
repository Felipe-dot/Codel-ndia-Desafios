import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <img src="/assets/logo.svg" alt="studio ghibli logo" />

          <div className="social-medias">
            <img src="/assets/facebook.svg" alt="facebook link" />
            <img src="/assets/instagram.svg" alt="instagram link" />
            <img src="/assets/twitter.svg" alt="x link" />
            <img src="/assets/youtube.svg" alt="youtube lik" />
          </div>
        </div>
      </div>
    </>
  );
}
