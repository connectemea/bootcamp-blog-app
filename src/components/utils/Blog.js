import styles from './Blog.css'
export default function Blog(props) {
  const { title, desc } = props;
  return (
    <div className={styles.Card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
