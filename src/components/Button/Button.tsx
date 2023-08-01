import styles from "./Button.module.css";

const Button = ({
  text,
  className,
}: {
  text: string;
  className?: CSSModuleClasses[string];
}) => {
  return <button className={`${styles.button} ${className}`}>{text}</button>;
};
export default Button;
