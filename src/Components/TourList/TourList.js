import React, {Component} from "react";
import Tour from "../Tour/Tour";
import { tourData } from '../../tourData';
// import './tourlist.scss';

class TourList extends Component {
    
    render() {
        return(
            <section>
                {
                    tourData.map(tour =>  <Tour tour={tour} key={tour.id} />)
                }
            </section>
        );
    }

}
export default TourList;
