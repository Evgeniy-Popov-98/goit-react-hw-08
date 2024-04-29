import { Hourglass } from "react-loader-spinner";

const LoaderApp = () => {
  return (
    <div
      style={{
        marginTop: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default LoaderApp;
