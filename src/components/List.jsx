function List({ onClose, setAgree, rules }) {
  function handleAgree() {
    setAgree(true);
    onClose();
  }
  return (
    <div className="mt-3">
      <div dangerouslySetInnerHTML={{ __html: rules }} className="list text-xl"></div>
      <button
        className="px-8 text-xl py-3 mt-3 rounded-full bg-secondary overflow-hidden text-white ms-auto block"
        onClick={() => handleAgree()}
      >
        Agree
      </button>
    </div>
  );
}

export default List;
