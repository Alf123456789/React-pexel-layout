import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
    function handleSelect() {
            console.log('Hello World!');
    }
  return (
    <div>
      <Header />  {/* per mettere qua il componente di sopra scriviamo il nome Header con la lettera maiscola.*/}
      <main>             {/* o possiamo avere in modo piu abbreviato <Header /> per forza deve mettersi  lo /    */}
        <section id= "core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image} 
          />
          <CoreConcept 
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
          />
          <CoreConcept
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
           <TabButton onSelect={handleSelect}>Components</TabButton>
           <TabButton onSelect={handleSelect}>JSX</TabButton>
           <TabButton onSelect={handleSelect}>Props</TabButton>
           <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
         Dynamic Content!
        </section>
      </main>
    </div>
  );
}

export default App;
