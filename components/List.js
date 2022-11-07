export default function List(props) {
  const { items } = props;
  const nodes = items.map((item, i) => <li key={i}>{item}</li>);
  return <ul>{nodes}</ul>;
}
