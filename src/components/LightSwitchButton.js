
function LightSwitchButton(props) {
  const { light, switchLight } = props
  const handleClick = () => {
    switchLight()
    console.log('this is the props: ', props)
  };

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === "on" && (<span className="on"><i>💡</i> I'm on!</span>)}

      {light === "off" && (<span className="off"><i>💡</i> I'm off!</span>)}
    </button>
  );
}

export default LightSwitchButton;
