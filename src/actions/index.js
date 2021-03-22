const setUserName = (userName) => {
    return {
        type: "SET_USER_NAME",
        payload: userName
    }
}

const setName = (name) => {
    return {
        type: "SET_NAME",
        payload: name
    }
}

const setPhone = (phone) => {
    return {
        type: "SET_PHONE",
        payload: phone
    }
}

const addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

const updateContact = (contact) => {
    return {
        type: "UPDATE_CONTACT",
        payload: contact
    }
}

export {
    setUserName,
    setName,
    setPhone,
    addContact,
    updateContact
}