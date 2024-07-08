import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageContainer } from "../components/layout/containers";
import { Sidebar } from "../components/navigation/sidebar";
import { AuthContext } from "../contexts/auth.context";
import { DashboardPage } from "../pages/dashboard.page";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { OverviewPage } from "../pages/overview.page";
import { SignupPage } from "../pages/signup.page";
import { TransactionsPage } from "../pages/transactions.page";

export const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {!isAuthenticated ? (
        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </PageContainer>
      ) : (
        <PageContainer auth>
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="*" element={<Navigate to={"/dashboard"} />} />
          </Routes>
        </PageContainer>
      )}
    </>
  );
};
