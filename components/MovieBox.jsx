import React from "react"


const MovieBox = ({movie: {Title, Poster, Year}}) => {
    return (
        <div className="card text-center mb-3 bg-secondary">
            <div className="card-body">
                <img className="card-img-top" src={Poster} alt="" style={{width: "14rem"}}/>
                <h2>{Title}</h2>
                <p>{Year}</p>
            </div>
            
            
        </div>
    )
}

export default MovieBox