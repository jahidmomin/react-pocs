import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

export function HomeInternal() {
  return <h1>Home Page</h1>;
}

export default function UserDashboard() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
        <Link to="notifications">Notifications</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function Profile() {
  return <h2>User Profile</h2>;
}

export function Settings() {
  return <h2>User Settings</h2>;
}

export function Notifications() {
  return <h2>User Notifications</h2>;
}
