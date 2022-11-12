import logo from './logo.svg';
import './App.css';

function App() {
  const name = '엘리';
  const list = ['우유', '딸기', '바나나', '요거트'];

  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src="https://images.unsplash.com/photo-1668241282073-2cf47bae10d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        alt="nature"
      />
    </>
  );
}

export default App;
