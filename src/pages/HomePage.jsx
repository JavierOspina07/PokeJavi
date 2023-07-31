import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { setTrainerG } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    //e.target.inputTrainer.value
    dispatch(setTrainerG(inputTrainer.current.value));
    navigate('/pokedex')
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Hi trainer</h2>
      <p>To get started with the application, give me your trainer name 😉.</p>
      <form onSubmit={handleSubmit}>
        <input id="inputTrainer" ref={inputTrainer} type="text" />
        <button>Gotta catch'em all!</button>
      </form>
    </div>
  );
};

export default HomePage;
