import LoginCard from "../components/Generales/LoginCard";
import Layout from "../components/Generales/Layout";

const LoginPage = () => {
  return (
    <Layout title_page={"Funko C del U - Login"}>
      <div className="container">
        <LoginCard />
      </div>
    </Layout>
  );
};

export default LoginPage;
