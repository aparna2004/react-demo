function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function GreetingDemo() {
  return (
    <div>
      <Greeting name="People" />
      <Greeting name="React Learners" />
    </div>
  );
}

export default GreetingDemo;
