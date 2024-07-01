const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleDetails: null,
			people: null
		},
		actions: {
			getPeopleDetails: async (uid) => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/people/'+uid);
					console.log(resp)
					if (!resp.ok) throw new Error('Error fetching people details')
					const data = await resp.json();
					console.log(data)
					setStore({peopleDetails: data.result})
				} catch (error) {
					console.log(error)
				}
			},
			getPeople: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/people');
					console.log(resp)
					if (!resp.ok) throw new Error('Error fetching people')
					const data = await resp.json();
					console.log(data)
					setStore({people: data.results})
				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
