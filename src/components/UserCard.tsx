import { Stack, Image } from "react-bootstrap";
import { user } from "../types/storeType";
import avatar from "../assets/avatar.svg";
import { useState, useEffect } from "react";

function UserCard({ user }: { user: user }) {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-3">
      <Stack
        direction={windowSize < 550 ? "vertical" : "horizontal"}
        gap={3}
        style={{ alignItems: "unset" }}
      >
        <Image
          src={avatar}
          style={{ width: "300px", height: "100%", border: "none" }}
        />
        <Stack gap={1}>
          <h1>{user.username}</h1>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>
            Address: {user.address?.city} {user.address?.street}{" "}
            {user.address?.suite}
          </p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>
            Work: {user.company?.name} {user.company?.catchPhrase}{" "}
            {user.company?.bs}
          </p>
        </Stack>
      </Stack>
    </div>
  );
}
export default UserCard;
