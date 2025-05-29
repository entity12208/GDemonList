import './App.css';

const demons = [
  { id: 1, name: 'Acheron', creator: 'Ryamu', video: 'https://youtube.com/watch?v=xyz', position: 1 },
  { id: 2, name: 'Slaughterhouse', creator: 'IcedCave', video: 'https://youtube.com/watch?v=abc', position: 2 },
  { id: 3, name: 'Tartarus', creator: 'Dolphy', video: 'https://youtube.com/watch?v=def', position: 3 },
];

function App() {
  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🔥 GDemonList</h1>
      <h2>Top 3 Demons</h2>
      <ul>
        {demons.map((demon) => (
          <li key={demon.id} style={{ marginBottom: '1rem' }}>
            <strong>#{demon.position}</strong> - {demon.name} by {demon.creator}
            <br />
            <a href={demon.video} target="_blank" rel="noreferrer">Watch</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
