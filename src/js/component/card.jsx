import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, uid }) => {



    return (
        <div className="card" style={{minWidth: '18rem'}}>
            <figure className="card-img-top">
                <img className="img-fluid" src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <Link to={'/details/'+uid} className="btn btn-primary">
                learn more
            </Link>
            <button className="btn btn-secondary">
                fav
            </button>
        </div>
    )
}