import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Search from '../Search/Search';

const HomePage = () => {

    const [data, setData] = useState()



  
    if (data === undefined) {
      axios.get(`https://api.spacexdata.com/v3/launches`)
    .then(res => {
      const info = res.data;
      setData(info);
    })
    }
  
    
    console.log(data)


    return (
         

        
        <div className="container">
          <div className="text-center p-5">
          {/* search section */}
          
            <Search></Search>
            
            {/* {(() => {

            if (countryData !== undefined) {
            return <Search cd={countryData} sd={setSelectedData}></Search>;
            }

            return <Search></Search>
            })()} */}
            

          </div>

          {/* Country data  */}
          <div className="container">
              <div class="row d-flex justify-content-between">
              

                {/* {(() => {

                if (countryData !== undefined && selectedData === undefined) {
                return countryData.map(cd => <CountryData key={Math.random()} sd={selectedData}  cdata={cd}></CountryData>) 
                ;
                } 
                else if (selectedData !== undefined) {
                  return <SearchedData sd={selectedData} cdata={countryData}></SearchedData>
                  
                }

                return <h1>Data not found</h1>
                })()} */}



            
            </div>
          </div>
        </div>
        
    );
};

export default HomePage;