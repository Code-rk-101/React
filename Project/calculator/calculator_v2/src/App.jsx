import "./app.css"
import Main_container from "./components/Main_container";


function App()
{
  return(
    <>
      <div className="calculator">
        <h1 className="heading">Calculator</h1>
        <Main_container></Main_container>
      </div>
    </>
  )
}

export default App;