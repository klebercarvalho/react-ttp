import React from 'react';

class App extends React.Component {
   render() {
      const i = 1;
      return (
         <div>
            <h1>{i === 1 ? 'True!' : 'False'}</h1>
         </div>
      );
   }
}
export default App;
