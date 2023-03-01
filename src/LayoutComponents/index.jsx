import "./styles.css";
export const LayoutComponents = (props) => {
  return (
    <div className="container-l">
      <div className="container-login">
        <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  );
};