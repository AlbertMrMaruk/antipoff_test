import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import PrivateRoute from "./pages/PrivateRoute";
import UserProfile from "./pages/UserProfile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateSignRoute from "./pages/PrivateSignRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:id"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/sign-in"
          element={
            <PrivateSignRoute>
              <SignIn />
            </PrivateSignRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PrivateSignRoute>
              <SignUp />{" "}
            </PrivateSignRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
