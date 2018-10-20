export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState == null)
            return undefined;
        return JSON.parse(serializedState);
    }
    catch (err) {
        console.log("error in loading the localstorage data");
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        console.log("error while saving to localstorage", err);
    }
}