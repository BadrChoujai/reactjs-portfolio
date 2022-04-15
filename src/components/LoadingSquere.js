import Loader from "react-js-loader";

export const LoadingSquere = () => {
  return (
    <div>
      <Loader
        type="box-rotate-z"
        bgColor={"#000000"}
        color={"#000000"}
        size={100}
      />
      <p className="break-words">Loading...</p>
    </div>
  );
};
