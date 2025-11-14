const Subtitle = ({ subtitle, url }) => {
  return (
    <h3 className="text-2xl font-semibold">
      {subtitle}
      {url && (
        <>
          {" ("}
          <a
            href={url}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            inspiration
          </a>
          {")"}
        </>
      )}
    </h3>
  );
};

export default Subtitle;
