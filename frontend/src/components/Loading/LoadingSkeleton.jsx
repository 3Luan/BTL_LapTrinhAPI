import "./loadingskeleton.css";

const LoadingSkeleton = (props) => {
  const { style } = props;
  return <div className="skeleton-loader" style={style}></div>;
};

export default LoadingSkeleton;
