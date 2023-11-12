
import './App.css'
import hero from './data.json';
import Card from './Components/Card/Card';

function App() {

  return (
    <>
      <div>
        <div className='hero_list'>
          {hero.map((item, index) => {
            return (
              <Card
                name={item.name}
                universe={item.universe}
                alterego={item.alterego}
                occupation={item.occupation}
                friends={item.friends}
                superpowers={item.superpowers}
                url={item.url}
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
