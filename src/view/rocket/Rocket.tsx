import { Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IRocket } from "../../models/rocketLunch";
import "./style.css";

function Rocket() {
  const [rocket, setRocket] = useState<IRocket>();
  const history = useHistory();
  const flightNumber = history.location.pathname.split("/").pop();

  const getRocketList = async (flight_number: string) => {
    await axios
      .get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
      .then((response) => {
        setRocket(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRocketList(flightNumber!);
  }, [flightNumber]);

  return (
    <div className="rocketCard">
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p className="rocket_name">
          Rocket Name : {rocket?.rocket.rocket_name}
        </p>
        <p className="rocket_type">Rocket Type: {rocket?.rocket.rocket_type}</p>
        <p>Reused: {rocket?.rocket.fairings.reused ? "Yes" : "No"}</p>
      </Card>
    </div>
  );
}

export default Rocket;
