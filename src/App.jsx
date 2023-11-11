
import './App.css'
import hero from './data.json';
import Card from './Components/Card/Card';

function App() {
  //console.log(hero);
  return (
    <>
      <div>
        <div className='hero'>
          {hero.map((item, index) => {
            return (
              <Card
                name={item.name}
                universe={item.universe}
                alterego={item.alterego}
                occupation={item.occupation}
                friends={item.friends}
                superpower={item.superpower}
                image={item.url}
                info={item.info}
                key={index} />
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App
