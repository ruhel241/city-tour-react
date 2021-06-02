import React, {Component} from "react";
import Tour from "../Tour/Tour";
import './tourlist.scss';
import { tourData } from '../../tourData';

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
