export const setTitle = (newTitle, oldTitle, dispatch) => {
    if(newTitle !== oldTitle) {
        dispatch({
            type: "SET_PAGE_TITLE",
            payload: newTitle
        });
    };
};