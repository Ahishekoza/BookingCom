import React from 'react'
import './FeatureProperty.css'
import useFetch from '../../hooks/useFetch'
const FeatureProperty = () => {
    const { data, error, loading } = useFetch("/hotels?featured=true&min=50&max=150")

    return (
        <div className="fp">
            {
                loading ?
                    <div>Loading ...</div>
                    :
                    error ?
                        <div>{error}</div>
                        :
                        <>
                            {
                                data.map((item) => (
                                    <div className="fpItem" key={item._id}>
                                      <img
                                        src={item.photos[0]}
                                        alt=""
                                        className="fpImg"
                                      />
                                      <span className="fpName">{item.name}</span>
                                      <span className="fpCity">{item.city}</span>
                                      <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                                      {item.rating && <div className="fpRating">
                                        <button>{item.rating}</button>
                                        <span>Excellent</span>
                                      </div>}
                                    </div>
                                  ))
                            }
                        </>
            }

        </div>
    )
}

export default FeatureProperty