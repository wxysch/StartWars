const Row = ({ left, rigth }) => {
    return (
      <div className="row mb2">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{rigth}</div>
      </div>
    );
  };
export default Row