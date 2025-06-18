import { Navbar } from "./Navbar";
import Intro1 from "./Intro";
import Data1 from "./About";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>

      <Intro1></Intro1>
      <br></br>
      <br></br>
      <hr class="my-4 border-t border-gray-300" />
      <br></br>
      <br></br>

      <Data1 />
    </div>
  );
}

export default App;
