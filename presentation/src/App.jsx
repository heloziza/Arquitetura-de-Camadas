import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [img, setImg] = useState("");
  const [id, setId] = useState();
  const [tentativa, setTentativa] = useState("");
  const [resultado, setResultado] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/getImagem')
        .then((res) => res.json())
        .then((data) => {
          setImg(data[0].img);
          setId(data[0].id);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, []);

  function gerar () {
    setResultado();
    setTentativa("");
    fetch('http://localhost:3001/getImagem')
        .then((res) => res.json())
        .then((data) => {
          setImg(data[0].img);
          setId(data[0].id);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  function adivinha () {
    var link = `http://localhost:3001/adivinhar?tentativa=${tentativa}&id=${id}`;
    fetch(link)
        .then((res) => {
          if(res.status === 200){
            setResultado("PARABÉNS! VOCÊ ACERTOU!");
          }
          else{
            setResultado("VOCÊ ERROU!");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  return (
    <main className="background">
      <h1>ADVINHE O PERSONAGEM DA TURMA DA HELLO KITTY</h1>
      <button className="generator-button" onClick={gerar}>Gere sua imagem aqui</button>
      <div className="image" style={{background:`url(${img}`}}>
      </div>
      <input onChange={(e)=>setTentativa(e.target.value)} value={tentativa} placeholder="Escreva o nome desse personagem" type="text" />
      <button onClick={adivinha} className="try-button">Adivinhar</button>
      {resultado?<h2 className="resultado">{resultado}</h2>:""}
    </main>
  );
}

export default App;
