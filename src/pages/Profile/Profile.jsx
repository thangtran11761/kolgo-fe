import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import MenuProfile from "./Menu/MenuProfile";
import SubContext from "./SubContext/SubContext";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const [changeContent, setChangeContent] = useState();

  const getUser = () => {
    const account = JSON.parse(localStorage.getItem("user"));
    console.log(account);
    setUser({ ...account });
  };

  useEffect(() => {
    getUser();
  }, []);

  const onChangeContentHandler = (data) => {
    setChangeContent(data);
    console.log(data);
  };

  return (
    <>
      <div
        className="profile"
        style={{ padding: "65px 50px", backgroundColor: "#fff" }}
      >
        <Row>
          <Col span={6}>
            <MenuProfile
              user={user}
              onChangeContentHandler={onChangeContentHandler}
            />
          </Col>
          <Col span={18}>
            <SubContext user={user} changeContent={changeContent} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
