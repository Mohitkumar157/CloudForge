function Card({ children, className = "" }) {
  return (
    <div className={`bg-[#f5f4ef] rounded-2xl p-11 ${className}`}>
      {children}
    </div>
  );
}

export default Card;