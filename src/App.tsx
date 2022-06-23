import Header from "./components/Header";
import Lessons from "./components/Lessons";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Video />
      <Lessons />
    </div>
  );
}

export default App;
