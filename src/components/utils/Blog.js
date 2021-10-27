export default function Blog(props) {
  // props object destructure
  const { title, desc } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
