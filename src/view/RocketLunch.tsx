import { List, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IRocket } from "../models/rocketLunch";

function RocketLunch() {
  const [rockets, setRockets] = useState([]);

  const getRocketList = async () => {
    await axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        setRockets(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRocketList();
  }, []);
  return (
    <List
      itemLayout="horizontal"
      dataSource={rockets}
      renderItem={(item: IRocket) => (
        <List.Item
          actions={[
            <Typography.Text strong>{item.launch_success}</Typography.Text>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar size="large" src={item.links.mission_patch_small} />
            }
            title={
              <Link to={`/lunch/${item.flight_number}`}>
                {item.mission_name}
              </Link>
            }
            description={moment
              .utc(item.launch_date_utc)
              .format("ddd, D MMM, YYYY HH:mm:ss")}
          />
        </List.Item>
      )}
    />
  );
}

export default RocketLunch;
