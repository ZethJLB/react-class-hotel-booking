import "../App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RoomDetails() {
  const [rooms, setRooms] = useState([]);
  const params = useParams();
  const roomsId = params.roomsId;
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
    <div>
      <div className="picture-bg-display"></div>
      <div className="content">
        {rooms.map(
          (rooms) =>
            rooms.id === roomsId && (
              <p key={rooms.id}>
                <div className="display-room">
                  <h2>{rooms.name}</h2>
                  <img
                    src={rooms.image}
                    alt={rooms.name}
                    className="room-image-display"
                  />
                  <h2>Facilities:</h2>
                  <div>
                    {rooms.facilities.map((facility, index) => (
                      <p key={index}>{facility}</p>
                    ))}
                  </div>
                  <h2>Dates available:</h2>
                  <p>dates/to/be/added</p>
                  <button className="btn">Book Now</button>
                </div>
              </p>
            )
        )}
      </div>
    </div>
  );
}
