import React from 'react'
import ReactDOM from 'react-dom'
import App from './layouts/App'
import registerServiceWorker from './registerServiceWorker'
import WebFont from 'webfontloader'

// WebFont is co-developed by Google and Typekit. It won't add blocking CSS to your app.
WebFont.load({
    google: {
        families: ['Lato']
    }
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
