import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Search from '../Search/Search';
import {addToDB} from '../../Redux/Actions/Actions'
import { connect } from 'react-redux';
import InfoDisplay from '../InfoDisplay/InfoDisplay';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';




const HomePage = (props) => {


  


  
  const {allDb, addToDB, searcheData} = props
    const [data, setData] = useState()

    // console.log(allDb, searcheData)

  
    if (data === undefined) {
      axios.get(`https://api.spacexdata.com/v3/launches`)
    .then(res => {
      const info = res.data;
      addToDB(info)
      setData(info)
    })
    }
  
    
    // console.log(data)


    function filterByDate() {

        const select = document.getElementById('launchDate');
        const text = select.options[select.selectedIndex].text;
        console.log(text)
    }

    function filterByLaunchStatus() {

      const select = document.getElementById('launchStatus');
      const text = select.options[select.selectedIndex].text;
      console.log(text)


    }

    return (
         

        
        <div className="container">
          <div className="text-center p-5">
          {/* search section */}
          
            <Search></Search>
            
            
          </div>

          {/* Country data  */}
          <div className="container">
            <div className="d-flex justify-content-between pb-5">

              <div>
                  <select id="launchDate" onChange={() => filterByDate()}>
                  <option value="en" selected>Select One</option>
                  <option value="en" >Last Week</option>
                  <option value="es">Last Month</option>
                  <option value="pt">Last Year</option>
                  </select>
              </div>
              <div>
                  <select id="launchStatus" onChange={() => filterByLaunchStatus()}>
                  <option value="en" selected>Select One</option>
                  <option value="en" >Success</option>
                  <option value="es">Failure</option>
                  
                  </select>
              </div>


              <button type="button" class="btn btn-secondary">Upcoming</button>
            </div>
          
                <InfoDisplay></InfoDisplay>
          </div>
        </div>
        
    );
};


const mapStateToProps = state => {
  return {
    allDb: state.allDb,
    searcheData: state.searcheData

  }
}

const mapDispatchToProps = {
  addToDB: addToDB
}
// const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// connectToStore(HomePage)

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);