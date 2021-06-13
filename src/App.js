import React from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
import { Random } from "random-js"
import Wheel from './Wheel'

function App() {
  const [shown, setShown] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const [wheelInitialRotation, setWheelInitialRotation] = React.useState(0)
  const [randomInitialRotation, setRandomInitialRotation] = React.useState(0)
  const [rotationDeg, setRotationDeg] = React.useState(0)
  const [segments, setSegments] = React.useState()
  const [segColors, setSegColors] = React.useState()

  const handleStart = () => {
    setDisabled(true)
    setRotationDeg((360*new Random().integer(3,5))-randomInitialRotation)
    setTimeout(() => setShown(true), 8000)
  }

  React.useEffect(() => {
    let length = new Random().integer(4,8)*2
    let _segments = []
    let _segColors = []
    for(let i = 0; i < length; i++) {
      _segments.push(i === 0 ? 'ČZU' : (i % 2 === 0 ? 'FIT' : 'FEL' ))
      _segColors.push(i === 0 ? '#048e0e' : (i % 2 === 0 ? '#2b048e' : '#8e044b' ))
    }
    setSegments(_segments)
    setSegColors(_segColors)
    let segmentTurn = (360/_segments.length)
    setWheelInitialRotation(-(segmentTurn/2))
    setRandomInitialRotation(new Random().integer(segmentTurn, 360-segmentTurn))
  }, [])


  return (
    <>
      <div className="App">
        <div className="wheel">
          <div className="picker"><img src="palec.jpeg" height="50px"></img></div>
          <div className="rotation-part" style={{transform: `rotate(${rotationDeg}deg)`}}>
            <div style={{transform: `rotate(${randomInitialRotation}deg)`}}>
              <div className="wheel-component-outer" style={{transform: `rotate(${wheelInitialRotation}deg)`}}>
                <div className="wheel-component">
                  {segments && segColors && <Wheel list={segments} colorList={segColors} /> }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <h1>FIT или FEL?</h1>
          <p>
            Крутите колесо удачи, чтобы определить свою судьбу!
          </p>
          <Button variant='contained' color='primary' disabled={disabled} onClick={handleStart}>Крутить!</Button>
        </div>
      </div>
      <img src="czu.png" className="fullscreen" is-shown={shown.toString()} alt="До встречи в ČZU"/>
    </>
  )
}

export default App;
