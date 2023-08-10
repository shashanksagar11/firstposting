import React,{useState} from "react";

const Onbutton = () => {
  let [show, setShow] = useState();
  const disable = () => {
    setShow(true);
  };
  const visible = () => {
    setShow(false);
  };
  return (
    <div>
      <input type="text" disabled={show} />
     

      <button onClick={disable}>Disable</button>
      <button onClick={visible}>Show</button>
    </div>
  );
};

export default Onbutton;
