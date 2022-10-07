const About: React.FC = () => {
  function goMain() {
    history.pushState({}, "", "/");
    const navEvent = new PopStateEvent("/");
    window.dispatchEvent(navEvent);
  }
  return (
    <div>
      <p className="title">About</p>
      <button className="btn" onClick={goMain}>
        go main
      </button>
    </div>
  );
};

export default About;
