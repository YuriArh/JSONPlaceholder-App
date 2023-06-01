import { Container, Stack } from "react-bootstrap";
import { user } from "../types/storeType";
import avatar from "../assets/avatar.svg";

function UserCard({ user }: { user: user }) {
  return (
    <Container className="mb-3">
      <Stack direction="horizontal" gap={3} style={{ alignItems: "unset" }}>
        <img
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
    </Container>
  );
}
export default UserCard;
