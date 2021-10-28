import styles from './styles.module.css'
export default function Blog(props) {
  // props object destructure
  const { title, desc } = props;

  return (
    <div className={styles.Card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
