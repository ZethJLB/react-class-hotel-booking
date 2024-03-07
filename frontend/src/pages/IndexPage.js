import { Outlet } from "react-router-dom";
import "../App.css";

export default function IndexPage() {
  return (
    <div className="containers">
      <Outlet></Outlet>
      <nav>
        <div class="brand">
          <h2>📖 Zodiac Hotel</h2>
        </div>
        <div class="navigation">
          <ul class="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="reserve">Reservations</a>
            </li>
            <li>
              <a href="profile">Profile</a>
            </li>
          </ul>
          <div class="search">
            <div class="search-content">
              <button class="search-button">Search</button>
              <input
                type="text"
                class="search-input"
                placeholder="Search here..."
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
