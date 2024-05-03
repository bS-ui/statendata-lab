import { useState } from "react"
import './CircleSelector.css'
import Circles from "../../components/Circles/Circles"
import Selectors from "../../components/Selectors/Selectors"

const CircleSelector = () => {
  // state is initialized as false for all circles
  // you'll write code to change the selected index to true on click
  const [selections, setSelections] = useState([true, false, false, false])

  const handleSelection = (selectedIdx) => {
    const newSelections = selections.map((selection,idx) => (
      selectedIdx === idx ? true : false
    ))
    setSelections(newSelections)
  }

  return ( 
    <main>
      <Circles selections={selections} handleSelection={handleSelection}/>
      <Selectors selections={selections} />
    </main>
  )
}

export default CircleSelector