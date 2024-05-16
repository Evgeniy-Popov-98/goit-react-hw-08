import clsx from "clsx";

import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={clsx(style.homeContainer)}>
      <h1>Hello world!</h1>
      <div>
        <h2>
          I want to present to you my simple application called{" "}
          <span className={clsx(style.nameBookSpan)}>
            &quot;Telephone book&quot;
          </span>
          .
        </h2>
        <div className={clsx(style.skilsContainer)}>
          <p className={clsx(style.skilBox)}>
            This application allows an authorized user to view, add and delete
            phone contacts.
          </p>
          <p className={clsx(style.skilBox)}>
            This app is written with help React, React Router (routing by
            application), Redux, Backend service{"  "}
            <a href="https://mockapi.io/projects">mockapi.io</a>, JavaScript,
            HTML, CSS
          </p>
          <p className={clsx(style.skilBox)}>
            The application implements a Store for saving the user&apos;s status
            and a Locale Store for saving the list of contacts in the case when
            the user is authorized.
          </p>
        </div>
      </div>
      {/* <div>
        <p>
          If you are interested in this work, I invite you to my pages where you
          can view more of my projects.
        </p>
        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default HomePage;
