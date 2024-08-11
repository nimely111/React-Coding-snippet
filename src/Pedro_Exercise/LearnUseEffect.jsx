import React, { useState } from 'react'
import Text from './Text';

const LearnUseEffect = () => {
    const [showText, setShowText] = useState(false);

  return (
    <div className='App'>
      <button
      onClick={() => setShowText(!showText)}
      >
        Show/Hide
      </button>
      {showText && <Text />}
    </div>
  )
}

export default LearnUseEffect
