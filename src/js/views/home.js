import React, { useContext } from "react";;
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="container d-flex overflow-x-auto">
				{store.people?.map(el => <Card key={el.uid} name={el.name} uid={el.uid} />)}
			</div>

		</div>
	);
}