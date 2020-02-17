React environment variables

https://create-react-app.dev/docs/adding-custom-environment-variables/

note: you will need to stop and restart the 'npm start' create-react-app development environment/server to see this change

The app now has a fetch call to get the dogs programmed, but it doesn't work because of CORS

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

BROWSERS implement this for secrutiy reasons

https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

To fix it, you program yoru server to speak to certain clients that it recognizes

[TODO: figure out what IOW server is]

IOW server uses HTTP headers and sometimes also a response to an OPTIONS request to say who is allowed to connect and what they're allowed to do

Uses SEMANTIC UI -- fun library of Graphical UI components that are very easy to use and customize

https://react.semantic-ui.com/

To install it,

`npm install semantic-ui-css semantic-ui-react`

Then `index.js` Add this line

`import 'semantic-ui-css/semantic.min.css'`

before this line 

`import './index.css'

