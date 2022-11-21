import classes from "./Meme.module.css";
import { useState } from "react";
//import useForm from "../store/use-Form";

const Meme = () => {
  const [allMemeImages, setallMemeImages] = useState([]);
  const [randomImg, setRandomImg] = useState("");
//  const { value: enteredFirstValue, onChangeHandler: topChangeHandler } = useForm();

  // const { value: enterBottomValue, onChangeHandler: bottomChangeHandler } = useForm();

  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((content) => setallMemeImages(content.data.memes));

  const formHandler = (e) => {
    e.preventDefault();
    const item = allMemeImages[Math.floor(Math.random() * (allMemeImages.length - 3) + 3)].url
    setRandomImg(item);
  };

  return (
    <div className={classes.MainContainer}>
      <form onSubmit={formHandler} className={classes.formContainer}>
        <div>
          <label className={classes.lable}>
            Find Memes Worth Images
          </label>
        </div>
       { /*<div>
          <input
            type="text"
            id="firstText"
            onChange={topChangeHandler}
            aria-describedby="emailHelp"
            value={enteredFirstValue}
          />
        </div>*/}

        <div>
          <button type="submit" className={classes.buttonFont}>
            Generate
          </button>
        </div>
      </form>
      <div className={classes.secondContainer}>
        <div className="img-fluid">
          {randomImg === "" ? (
            ""
          ) : (
            <img src={randomImg} className="img-fluid" alt="" />
          )}
          {/*randomImg === "" ? (
            ""
          ) : (
            <h2 className={classes.firstValue}>{enteredFirstValue}</h2>
          )*/}
          {/* {randomImg === "" ? (
            ""
          ) : (
            <h2 className={classes.lastvalue}>{enterBottomValue}</h2>
          )}*/}
        </div>
      </div>
    </div>
  );
};

export default Meme;
