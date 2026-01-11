import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/header";
import CounterDisplay from "./components/counterDisplay";
import Controls from "./components/controles";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/privacyMessage";


function App()
{
  const privacy_toggle = useSelector((store)=>store.privacy_toggle);
  return (
    <center>

      <div className="px-4 py-5 my-5 text-center card" 
      style=
      {
        {
          width:"50%",
          minWidth: "400px"
        }
      }>

        <Header></Header>
        <div className="col-lg-6 mx-auto"> 
          {privacy_toggle ? <PrivacyMessage/>:<CounterDisplay/>}
          <Controls></Controls>
        </div> 
        
      </div>

    </center>
  );
}

export default App;