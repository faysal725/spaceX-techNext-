import React from 'react';
import { connect } from 'react-redux';
import { searchDB } from '../../Redux/Actions/Actions';
import CartItems from './CartItems';

const InfoDisplay = (props) => {
    const {searchDB, displayItems} = props
    // console.log(searchDB, displayItems)
    return (
        <div class="row d-flex justify-content-between">
            
            <CartItems></CartItems>
            {
                displayItems.map(di => <CartItems key={Math.random()} cartData={di}  ></CartItems>) 
                
            }

        </div>
    );
};


const mapStateToProps = state => {
    return {
    displayItems: state.displayItems
    }
  }
  
  const mapDispatchToProps = {
    searchDB: searchDB
  }

export default connect(mapStateToProps, mapDispatchToProps)(InfoDisplay);