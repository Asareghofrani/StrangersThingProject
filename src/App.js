import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Login, Posts, Home, Register, Profile, MyAppBar } from "./Components";
import CreateForm from "./Components/Posts/CreateForm";

function App() {
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <MyAppBar
          isUserLoggedIn={isUserLoggedIn}
          setLoggedInUsername={setLoggedInUsername}
          setIsUserLoggedIn={setIsUserLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Login
                setLoggedInUsername={setLoggedInUsername}
                setIsUserLoggedIn={setIsUserLoggedIn}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                setLoggedInUsername={setLoggedInUsername}
                setIsUserLoggedIn={setIsUserLoggedIn}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={<Home loggedInUsername={loggedInUsername} />}
          ></Route>
          <Route
            path="/posts"
            element={
              <Posts
                loggedInUsername={loggedInUsername}
                isUserLoggedIn={isUserLoggedIn}
              />
            }
          ></Route>
          <Route path="/posts/add" element={<CreateForm />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/profile"
            element={<Profile loggedInUsername={loggedInUsername} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
