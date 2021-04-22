const setNewState = (data, setData, target) => {
	const newState = {};

	Object.entries(data).forEach(([propState, valueStateObj]) => {
		const [propInput, nameInput] = target.name.split('_');

		// IF NAMEINPUT IS UNDEFINED IT MEANS THAT FUNCTION WAS TRIGGERED BY A CHECKBOX
		if (propState === propInput) {
			nameInput !== undefined
				? (newState[propState] = { ...valueStateObj, [nameInput]: target.value })
				: (newState[propState] = { ...valueStateObj, visible: !valueStateObj.visible });
		} else {
			newState[propState] = valueStateObj;
		}

		// IT WAS FOR UPDATE THE STATE ALL PROPERTY SAME NAME
		// if (nameInput in valueStateObj && nameInput !== undefined && propInput !== propState) {
		// 	if (newState[propState][nameInput].length === 0) newState[propState][nameInput] = target.value;
		// }
	});

	setData(newState);
};

export default setNewState;
