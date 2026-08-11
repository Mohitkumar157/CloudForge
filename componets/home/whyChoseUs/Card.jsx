function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl p-11 ${className}`}>
      {children}
    </div>
  );
}

export default Card;