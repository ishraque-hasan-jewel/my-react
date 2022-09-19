import classes from "../styles/Button.module.css";

export default function Button({props}) {
  let className, children= props;
  return <div className={`${classes.button} ${className}`}>{children}</div>;
}
