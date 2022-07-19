export const ADD_MEMBER = "ADD_MEMBER";

export const addMember = (newMemberText) => {
    return({type: ADD_MEMBER, payload: newMemberText})
}