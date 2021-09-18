import React from "react";
import Style from "./style.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <footer className={Style.footer_lagre}>
      <div className={Style.footer_content}>
        <div className={Style.logo}>
          <Image
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="logc footer"
            width={100}
            height={90}
          />
          <button>Join the Community</button>
        </div>
        <div className={Style.menu}>
          <h3>THE BASICS</h3>
          <ul>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </div>
        <div className={Style.menu}>
          <h3>GET INVOLVED</h3>
          <ul>
            <li> Contribution Bible</li>
            <li>3rd Party Applications</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>
        <div className={Style.menu}>
          <h3>COMMUNITY</h3>
          <ul>
            <li> Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className={Style.menu}>
          <h3>LEGAL</h3>
          <ul>
            <li> Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
