import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import HomePage from "./routes/HomePage";
import AuthLayout from "./layout/AuthLayout";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import ProtectedLayout from "./layout/ProtectedLayout";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>

        {/* Authentication Layout */}
        <Route element={<AuthLayout/>}>
          <Route path="/signin/*" element={<Signin/>}/>
          <Route path="/signup/*" element={<Signup/>}/>
        </Route>

        {/* Protected Routes */}
        <Route element={
          <ProtectedLayout>
             <MainLayout/>
          </ProtectedLayout>
        }>
          {/* add all the protected routes */}

        </Route>

      </Routes>
    </Router>
  )
}

export default App