import './App.css'
import UserData  from './UserData';
import ConditionalRendering  from './ConditionalRendering';
import RenderingList from './RenderingList';
import RespondingToEvents from './RespondingToEvents';
import UpdatingTheScreen from './UpdatingTheScreen';
import { useState } from 'react';
import  Job  from './Pedro_Exercise/Job';
import Planets from './Pedro_Exercise/Planets';
import Emplooyes from './Employees';
import CompareClassToFunction from '../react101/CompareClassToFunction';
import CompareFunctionToClass from '../react101/CompareFunctionToClass';
import Greetings from '../Components/Classes/Greetings';
import Class_Counter from '../Components/Classes/Class_Counter';

function App() {
  const isMale = true;
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

// sonny class
  function getGreeting(user){
    if(user){
      return <h1>Hello, { user }!</h1>
    }
      return <h1> Hello, Stranger</h1>
  }

  // BEM = Block Element Modifier
  return (
    <>
    
      <div className="app"> 
        {/* <h1 className="app__title">This is a title</h1>
        <h2 className="app__title app__title--large">This is a LARGE title</h2>
        <h3 className="app__title app__title--small">This is a SMALL title </h3> */}


        {/* sonny class */}
        { getGreeting("Vick") }
        <h2>You are a {isMale ? "Male" : "Female"}</h2>

        <UserData />
        <ConditionalRendering />
        <RenderingList /> 
        <RespondingToEvents />
        <h2>Counters that update together</h2>
        <UpdatingTheScreen count={count} onClick={handleClick} />
        <UpdatingTheScreen count={count} onClick={handleClick} /> 
        {/* Pedro Exercise */}
        <Job salary={90000} position="Senior SDE" company="Amazon" />
        <Job salary={12000} position="Junior SDE" company="Google" />
        <Job salary={10000} position="Project Manager" company="Netflicks" />
        <Planets />
        <hr />
        <Emplooyes />
        <CompareClassToFunction />
        <CompareFunctionToClass />
        <Greetings first_name="Taylor" last_name="Jones"/>
        <Class_Counter />
      </div>
      

    </>
  )
}

export default App
