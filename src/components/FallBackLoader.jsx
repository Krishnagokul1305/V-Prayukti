function FallBackLoader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <svg viewBox="25 25 50 50" className="loader-wrapper">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  );
}

export default FallBackLoader;
