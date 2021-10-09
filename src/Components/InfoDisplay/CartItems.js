import React from 'react';

const CartItems = (props) => {
    // const {launch_date_utc} = props?.cartData



    let filteredData = {
        missionName: props.cartData?.mission_name,
        rocketName: props.cartData?.rocket.rocket_name,
        details: props.cartData?.details,
        flightNo: props.cartData?.flight_number,
        launchSite: props.cartData?.launch_site.site_name_long,
        launchYear: props.cartData?.launch_year,
        launchSuccess:props.cartData?.launch_success,
        missionPatch:props.cartData?.links.mission_patch_small,

        launchDate: props.cartData?.launch_date_utc,
    }
    return (
        <div className="col-lg-4 col-md-5 col-sm-12 p-2 align-items-center">
            

            <div className="card" style={{width: "18rem"}}>
                <img src={filteredData.missionPatch}  className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Mission Name: <b>{filteredData.missionName}</b></h5>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Rocket Name: <b>{filteredData.rocketName}</b></li>
                    <li className="list-group-item">Flight No: <b>{filteredData.flightNo}</b></li>
                    <li className="list-group-item">Launch Site: <b>{filteredData.launchSite}</b></li>
                    <li className="list-group-item">Launch Year: <b>{filteredData.launchYear}</b></li>
                    <li className="list-group-item text-center">
                        <button className="btn btn-warning">More Info</button>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default CartItems;