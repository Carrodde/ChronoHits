import { NavLink, Outlet } from "react-router-dom";
import "./../styles/main.scss";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/playlists"}>Om</NavLink>
            </li>
            <li>
              <NavLink to={"/quiz"}>Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer> Stuff ... </footer>
    </>
  );
};
