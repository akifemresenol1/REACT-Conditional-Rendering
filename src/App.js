import './App.css';

const name = "Akif Emre";
const surname = "Şenol";
const isLoggenIn = true;

function App() {
  return (
    <>
     <h1>
      {isLoggenIn
      ? `Benim adım ${name}, soyadım ${surname} `
    : "Giriş yapmadınız."}
     </h1>
    </>
  );
}

export default App;
