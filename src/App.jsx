import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Section from './components/section';
import imageData from './components/images';



function App() {
  return (
    <div>
      <Header/>
      <Section data={imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
