import { nanoid } from "nanoid";

const initialState = {
    userName: sessionStorage.getItem("userName"),
    contacts: sessionStorage.getItem("contacts") ? JSON.parse(sessionStorage.getItem("contacts")) : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_NAME":
            return {
                ...state,
                userName: action.payload
            }
        case "ADD_CONTACT":
            const randomId = Math.floor(Math.random() * 1000);
            const id = nanoid();

            const contact = {
                id: id,
                name: action.payload.name,
                phone: action.payload.phone,
                photoUrl: `https://picsum.photos/id/${randomId}/200/200`,
            };

            const contacts = JSON.parse(sessionStorage.getItem("contacts"));

            if (!contacts) {
                sessionStorage.setItem("contacts", JSON.stringify([contact]));
            } else {
                sessionStorage.setItem("contacts", JSON.stringify([...contacts, contact]));
            }

            return {
                ...state,
                contacts: [...state.contacts, contact]
            }
        case "UPDATE_CONTACT":
            const idx = state.contacts.findIndex(
                (contact) => contact.id == action.payload.id
            );

            const updatedContact = {
                id: state.contacts[idx].id,
                name: action.payload.name,
                phone: action.payload.phone,
                photoUrl: state.contacts[idx].photoUrl,
            };

            const updatedContacts = [...state.contacts.slice(0, idx), updatedContact, ...state.contacts.slice(idx + 1)];

            sessionStorage.setItem("contacts", JSON.stringify(updatedContacts));

            return {
                ...state,
                contacts: updatedContacts
            }
        case "SET_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "SET_PHONE":
            return {
                ...state,
                phone: action.payload
            }
        default:
            return state
    }
}

export default reducer;