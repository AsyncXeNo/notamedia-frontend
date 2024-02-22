import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/notfound/NotFound";

import Home from "./pages/home/HomePage";

import LoginPage from "./pages/login/LoginPage";
import RegistrationPage from "./pages/registration/RegistrationPage";

import UserManagementPage from "./pages/users/UserManagementPage";
import UserUpdationPage from "./pages/users/UserUpdationPage";

import SignatureManagementPage from "./pages/signatures/SignatureManagementPage";
import SignatureCreationPage from "./pages/signatures/SignatureCreationPage";
import SignatureUpdationPage from "./pages/signatures/SignatureUpdationPage";

import CompaniesCreationPage from "./pages/companies/CompaniesCreationPage";
import CompaniesUpdationPage from "./pages/companies/CompaniesUpdationPage";
import CompaniesManagementPage from "./pages/companies/CompaniesManagementPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/users" element={<UserManagementPage />} />
        <Route path="/users/:username" element={<UserUpdationPage />} />

        <Route path="/signatures" element={<SignatureManagementPage />} />
        <Route path="/signatures/new" element={<SignatureCreationPage />} />
        <Route
          path="/signatures/:unique_name"
          element={<SignatureUpdationPage />}
        />

        <Route path="/companies" element={<CompaniesManagementPage />} />
        <Route path="/companies/new" element={<CompaniesCreationPage />} />
        <Route
          path="/companies/:unique_name"
          element={<CompaniesUpdationPage />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
