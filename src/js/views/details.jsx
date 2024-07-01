import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Details = () => {
    //const params = useParams() ----> params sea un objeto {id: 15}
    const { uid } = useParams() // desestructurando el objeto, accediendo directamente a su propiedad id
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPeopleDetails(uid)
    }, [])

    return (
        <>
            <h2>Details Page</h2>
            <div className="container d-flex">
                <div>

                    <figure>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={store.peopleDetails?.properties.name} />
                        <figcaption>
                            {store.peopleDetails?.properties.name}
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <p>{store.peopleDetails?.properties.gender}</p>
                    <p>{store.peopleDetails?.properties.eye_color}</p>
                    <p>{store.peopleDetails?.properties.height}</p>

                </div>
            </div>
            <p>{store.peopleDetails?.description}</p>
        </>
    )
}