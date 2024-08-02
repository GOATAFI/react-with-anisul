import { v4 as uuidv4 } from "uuid";
const todos = [
  {
    id: uuidv4(),
    title: "hello1",
    desc: "desc1",
  },
  {
    id: uuidv4(),
    title: "hello2",
    desc: "desc2",
  },
];
export default function List() {
  const todo = todos.map((item) => {
    const { id, title, desc } = item;
    return (
      <div key={id}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    );
  });
  return <>{todo}</>;
}
