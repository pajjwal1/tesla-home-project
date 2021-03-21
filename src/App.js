//import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Item from './components/item.js';
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';


function App() {
  return (
    <div className="App">
      <Header />
        <div className="app_itemsContainer">
          <Item
            title = 'Lowest Cost Solar Panel in India'
            desc = 'Money-back guarentee'
            descLink = ''
            background = {SolarPanels}
            leftBtnTxt = 'ORDER NOW'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'true'
            first
           />
           <Item
            title = 'Model S'
            desc = '$69,420'
            descLink = ''
            background = {ModelS}
            leftBtnTxt = 'CUSTOM ORDER'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'true'
           />
           <Item
            title = 'Model 3'
            desc = 'Money-back guarentee'
            descLink = ''
            background = {Model3}
            leftBtnTxt = 'ORDER NOW'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'true'
           />
           <Item
            title = 'Model X'
            desc = 'Money-back guarentee'
            descLink = ''
            background = {ModelX}
            leftBtnTxt = 'ORDER NOW'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'true'
           />
           <Item
            title = 'Model Y'
            desc = 'Money-back guarentee'
            descLink = ''
            background = {ModelY}
            leftBtnTxt = 'ORDER NOW'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'true'
           />
           <Item
            title = 'Solar Roof'
            desc = 'Money-back guarentee'
            descLink = ''
            background = {SolarRoof}
            leftBtnTxt = 'ORDER NOW'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'true'
           />
           <Item
            title = 'Accessories'
            desc = 'Money-back guarentee'
            descLink = ''
            background = {Accessories}
            leftBtnTxt = 'ORDER NOW'
            leftBtnLink = ''
            rightBtnTxt = 'LEARN MORE'
            rightBtnLink = ''
            twoButtons = 'false'
           />
           <Footer />
        </div>
    </div>
  );
}

export default App;
