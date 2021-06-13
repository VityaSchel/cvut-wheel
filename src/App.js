import React from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
// import {arc, pie} from 'd3-shape'
import { Random } from "random-js"
// import WheelComponent from 'react-wheel-of-prizes'
// import 'react-wheel-of-prizes/dist/index.css'
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
      <img src="/czu.png" className="fullscreen" is-shown={shown.toString()} alt="До встречи в ČZU"/>
    </>
  )
}

// function Wheel() {
//   const [svgs, setSvgs] = React.useState(<></>)
//
//   React.useEffect(() => {
//     const data = new Array(/*new Random().integer(3, 12)*2*/ 12).fill(1)
//     const arcs = pie()(data)
//
//     const arcToSvg = arcValues => arc()({
//       innerRadius: 0,
//       outerRadius: 100,
//       startAngle: arcValues.startAngle,
//       endAngle: arcValues.endAngle
//     })
//
//     let i = -1;
//
//     const svgToDocument = svgData => {
//       i++
//       return (
//         <SvgPart
//           pathData={svgData}
//           czu={String(i===0)}
//           even={String(i%2===0)}
//           len={data.length}
//           index={i}
//         />
//       )
//     }
//
//     let arcsSvgs = arcs.map(arcToSvg)
//     const half = Math.ceil(arcsSvgs.length / 2);
//
//     const firstHalf = arcsSvgs.slice(0, half)
//     const secondHalf = arcsSvgs.slice(-half)
//     let arcsData1s = firstHalf.map(svgToDocument)
//     let arcsData2nd = secondHalf.map(svgToDocument)
//     setSvgs(<><div className="firstHalf">{arcsData1s}</div><div className="secondHalf">{arcsData2nd}</div></>)
//   }, [])
//
//   return (
//     <div className="wheel-outer">
//       {svgs}
//     </div>
//   )
// }
//
// function SvgPart(props) {
//   const pathRef = React.useRef()
//   const textRef = React.useRef()
//
//   React.useEffect(() => {
//     if(pathRef && textRef) {
//       let bbox = pathRef.current.getBBox()
//       let x = bbox.x //bbox.x / 2
//       let y = bbox.y // bbox.y-bbox.height
//       let deg = 360/props.len*props.index
//       deg = deg - 90;
//       textRef.current.style.transform = 'translate('+props.label[0]+'px, '+props.label[1]+'px) rotate('+deg+'deg)'
//     }
//   }, [pathRef, textRef])
//
//   return (
//     <div className="wheel-part-outer">
//       <svg className="wheel-part" {...props}>
//         <path d={props.pathData} ref={pathRef}></path>
//       </svg>
//       <span ref={textRef}>{props.czu ? 'ČZU' : (props.even ? 'FIT' : 'FEL')}</span>
//     </div>
//   )
// }

export default App;
