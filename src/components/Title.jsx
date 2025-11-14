const Title = ({ title }) => {
  return (
    <div className="mb-8 flex items-center gap-2">
      <span className="ml-2 flex items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          className="inline-block"
        >
          <circle
            cx="9"
            cy="9"
            r="7"
            fill="#1e293b"
            stroke="#3b82f6"
            strokeWidth="2"
            opacity="0.92"
          />
          <circle cx="9" cy="9" r="3" fill="#3b82f6" opacity="0.72" />
        </svg>
      </span>
      <h2 className="text-3xl font-bold uppercase leading-3">{title}</h2>
    </div>
  );
};

export default Title;
