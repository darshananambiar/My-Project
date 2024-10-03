import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>hello darshana</h1>
//     </div>
//   )
// }
// import React from 'react'

const App = () => {

  function Row() {
    return (
      <>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Place</th>
          <th>Country</th>
        </tr>
      </>
    );
  }

  function Column() {
    return (
      <>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>123 Main St  .</td>
          <td>New York</td>
        </tr>
      </>
    );
  }
return (
  <React.Fragment>
    <h1>Hello Fragment</h1>
    <p>When we use fragment we can avoid an extra node in the DOM tree</p>

    <table>
      <Row />
      <Column />
    </table>
  </React.Fragment>
)
}




export default App

