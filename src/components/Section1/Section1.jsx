import React from "react"

import './Section1.scss'

import icon1 from '../../assets/Mask Group.svg'

const Section1 = () => {
    return (
        <div className='Section1'>
            <div className="container">
                <div className="section1-box">
                    <div className="section1-text">
                        <h1 className="section1-title1">Happiness Is <span>Travelling</span>.</h1>
                        <h4 className="section1-subtitle2">No matter where in the world you want to go, we can help get you there</h4>
                        <p className="section1-subtitle3">Travel Agency Threats and Opportunities. 
                        The Perspective of Successful OwnersJoin the leader in small-ship cruising on the Great Lakes, 
                        and enjoy fabulous inclusions such as a pre-voyage hotel.</p>

                    </div>
                        <img src={icon1} alt="" id="icon1"/>
                    </div>
                    {/* <div className="section1-nav">
                        <h4 className="section_title4">Location</h4>
                            <input type="text" placeholder="Where are you going?" className="text" autoFocus maxLength={10} />
                        <h4 className="section_title4">Check in</h4>

                            <input type="date" placeholder="Add dates" className="text" />
                        <h4 className="section_title4">Check out</h4>

                            <input type="date" placeholder="Add dates" className="text" />
                            <button className="btn">Search</button>
                    </div> */}
            </div>
        </div>
    )
}

export default Section1