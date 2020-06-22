import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './styles.css'
import { buyIceCream } from '../../state/iceCream/iceCreamActions'

function IceCream() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of Ice Creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default IceCream
