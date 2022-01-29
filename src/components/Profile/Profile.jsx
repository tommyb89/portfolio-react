import React from "react";
import "./Profile.scss";
import me from "../../assets/images/me1.jpg";
import {
  FaLinkedin,
  FaGithub,
  FaRegArrowAltCircleDown as ArrowDown,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile">
      <ul className="profile__social">
        <img className="profile__img" src={me} alt="Me" />
        <li className="profile__item">
          <a
            className="profile__link"
            href="https://www.linkedin.com/in/tomasz-bielasik"
          >
            LinkedIn <FaLinkedin className="profile__icon" />
          </a>
        </li>
        <li className="profile__item">
          <a className="profile__link" href="https://github.com/tommyb89">
            Github
            <FaGithub className="profile__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
