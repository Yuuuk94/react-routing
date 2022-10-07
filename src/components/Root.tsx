const Root: React.FC = () => {
  function goAbout() {
    history.pushState({}, "", "/about");
    const navEvent = new PopStateEvent("/about");
    window.dispatchEvent(navEvent);
  }
  return (
    <div>
      <p className="title">root</p>
      <button className="btn" onClick={goAbout}>
        about
      </button>
    </div>
  );
};

export default Root;
