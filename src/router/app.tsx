import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import { DashboardPage } from "../pages/dashboard.page";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { OverviewPage } from "../pages/overview.page";
import { ProfilePage } from "../pages/profile.page";
import { SignupPage } from "../pages/signup.page";
import { TransactionsPage } from "../pages/transactions.page";

export const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {!isAuthenticated ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to={"/dashboard"} />} />
          </Routes>
        </>
      )}
    </>
  );
};
