class Notification {
    constructor(type, message) {
        this.type = type
        this.message = message
    }
}

export const addRecipeNotification = new Notification('success', 'Recipe added successfully.')
export const missingFieldNotification = new Notification('warning', 'One or more required fields missing, please complete and retry.')