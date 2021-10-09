import React from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import { searchDB } from '../../Redux/Actions/Actions';
import './Search.css'


const Search = (props) => {

    const {searcheData, searchDB, displayItems} = props

    // console.log(searcheData, searchDB, displayItems)
 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        // console.log(data.search);
        searchDB(data.search)
    } 



    return (
        <div>
            <div className="container search-container pt-5">



                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="search-box">
                        <input className="search-input" type="text" placeholder="Search Something" {...register("search")} />
                        {errors.search && <span>This field is required</span>}


                        <input className="search-button" type="submit" value="SEARCH" />
                    </div>
                </form>


            </div>

        </div>
    );
};

const mapStateToProps = state => {
    return {
    displayItems: state.displayItems,
      searcheData: state.searcheData
  
    }
  }
  
  const mapDispatchToProps = {
    searchDB: searchDB
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search);