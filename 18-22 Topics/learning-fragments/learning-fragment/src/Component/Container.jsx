import styles from "./Container.module.css";
//1st way
// const Container = (props) => {
//   return <div className={styles.container}>{props.children}</div>;
// };

//2nd way d-structure
const Container = ({children}) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
