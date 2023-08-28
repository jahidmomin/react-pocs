import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import UserDashboard, {
  HomeInternal,
  Notifications,
  Profile,
  Settings,
} from "./UserDashboard";

export default function RApp() {
  return (
    <Router>
      <nav className="list-inline d-flex m-2">
        <li className="m-3">
          <Link to="/">Home</Link>
        </li>
        <li className="m-3">
          <Link to="/user">User Dashboard</Link>
        </li>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<HomeInternal />} index />
        <Route path="user" element={<UserDashboard />}>
          {/* child component parent ke andr render huyge jaha outlet hai */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>

      {/* parent idhr he honga render */}

    </Router>
  );
}

/* 
When using nested routes in React Router v6, the element prop of the parent route is responsible for rendering the main component for that route. When you navigate to a URL that matches the path of the parent route, the component specified in its element prop will render. Any nested routes within that parent route will then render their components inside the parent's component where the <Outlet /> is placed. */
/* The <Outlet /> component serves as a placeholder where child routes render their components. When defining nested routes, you need a way to specify where, within the parent component, the child components should appear. This is the purpose of <Outlet />.
For the parent route itself, there's no need for an <Outlet /> unless it has child routes. The parent route renders its component directly when its path matches the current URL. */