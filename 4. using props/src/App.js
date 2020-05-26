/*Using Props
When we need immutable data in our component, we can just add props to reactDOM.render() function in main.js and use it inside our component.*/ 
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

export default App;