import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import HomePage from "./routes/HomePage";
import AuthLayout from "./layout/AuthLayout";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import ProtectedLayout from "./layout/ProtectedLayout";
import MainLayout from "./layout/MainLayout";
import Generate from "./components/Generate";
import Dashboard from "./routes/Dashboard";
import CreateEditPage from "./routes/CreateEditPage";
import MockLoadPage from "./routes/MockLoadPage";
import MockInterviewPage from "./routes/MockInterviewPage";
import Feedback from "./routes/Feedback";
import Contact from "./routes/Contact";
import AboutUs from "./routes/AboutUs";
import Services from "./routes/Services";




const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>

          
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
          <Route path="/generate" element={<Generate/>} >
            <Route index element={<Dashboard/>} />
            <Route path=":interviewId" element={<CreateEditPage/>}/>
            <Route path="interview/:interviewId" element={<MockLoadPage/>} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage/>}
            />
            <Route path="feedback/:interviewId" element={<Feedback/>} />
          </Route>

        </Route>

      </Routes>
    </Router>
  )
}

export default App