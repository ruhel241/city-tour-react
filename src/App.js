import React, {Component} from 'react';
import Navber from './Components/Navber/Navber';
import TourList from './Components/TourList/TourList';
import './App.css';


class App extends Component {
    render() {

        return(
            <React.Fragment>
                <Navber/>
                <TourList/>
            </React.Fragment>
        )
    }
}
export default App;