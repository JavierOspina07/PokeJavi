import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const trainer = useSelector((reducer) => reducer.trainer);

  return (trainer.length >= 3 ? <Outlet/> : <Navigate to='/' />)
};

export default ProtectedRoutes;
