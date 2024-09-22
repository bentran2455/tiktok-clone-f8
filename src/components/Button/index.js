import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

function Button({
  children,
  onClick = false,
  primary = false,
  text = false,
  to = false,
  href = false,
  leftIcon = false,
  select = false,
  ...moreProps
}) {
  const props = {
    onClick,
    ...moreProps,
  };
  let Comp = "button";
  const defaultClassName = [styles.buttonWrapper];

  if (primary) {
    defaultClassName.push(styles.primary);
  }
  if (text) {
    defaultClassName.push(styles.text);
  }
  if (select) {
    defaultClassName.push(styles.select);
  }
  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    props.href = href;
  }
  return (
    <Comp className={defaultClassName.join(" ")} onClick={onClick} {...props}>
      {leftIcon ? leftIcon : ""}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
