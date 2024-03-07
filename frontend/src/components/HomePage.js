import "../App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  function onSelectProject(id) {
    navigate(`roomdetails/${id}`);
  }
  useEffect(() => {
    fetch("http://localhost:3201/rooms/all")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRooms(data.rooms);
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  }, []);

  return (
    <div className="containers">
      <div className="picture-bg">
        <h1 className="greeting">Welcome to Zodiac Hotel</h1>
      </div>
      <div>
        <h1>Popular Rooms</h1>
        <div className="card-container" href="roomdetails/id">
          {rooms.map((rooms) => (
            <div key={rooms.id} className="room-card">
              <img src={rooms.image} alt={rooms.name} className="room-image" />
              <div className="room-details">
                <p>{rooms.name}</p>
                <p
                  className="project-button nav"
                  onClick={() => onSelectProject(rooms.id)}
                >
                  {rooms.price}
                </p>
                <a href="reserve" className="btn card-btn">
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
