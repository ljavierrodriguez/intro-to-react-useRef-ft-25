import React from 'react'
import UsingState from './hooks/UsingState'
import UsingEffect from './hooks/UsingEffect'
import UsingRef from './hooks/UsingRef'
import UsingCallback from './hooks/UsingCallback'
import MediaPlayer from './hooks/MediaPlayer'

const App = () => {

    return (
        <div>
            <h1>Using Hooks</h1>
            <UsingState />
            <UsingEffect />
            <UsingRef />
            <UsingCallback />
            <MediaPlayer />
        </div>
    )
}

export default App