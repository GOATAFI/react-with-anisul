const person = [
  {
    name: "Nahid",
    age: 24,
    phone: [
      {
        home: 12345,
        office: 98765,
      },
    ],
  },
  {
    name: "Mafi",
    age: 23,
    phone: [
      {
        home: 87654,
        office: 12098,
      },
    ],
  },
];

export default function NestedList() {
  const users = person.map((user, index) => {
    const { name, age, phone } = user;
    return (
      <div key={index}>
        <h2>Name : {name}</h2>
        <h5>Age : {age}</h5>
        {phone.map((p, i) => {
          const { home, office } = p;
          return (
            <div key={i}>
              <p>Home Number : {home}</p>
              <p>Office Number : {office}</p>
            </div>
          );
        })}
      </div>
    );
  });
  return <div>{users}</div>;
}
