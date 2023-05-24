class Notification {
    constructor(type, message) {
        this.type = type
        this.message = message
    }
}

export const addedRecipeNotification = new Notification('success', 'Recipe added successfully.')
export const updatedRecipeNotification = new Notification('success', 'Recipe updated successfully.')
export const deletedRecipeNotification = new Notification('success', 'Recipe deleted successfully.')

export const missingFieldNotification = new Notification('warning', 'One or more required fields missing, please complete and retry.')
export const deleteWarningNotification = new Notification('warning', 'This action cannot be undone once completed!')

export const deleteCancelledNotification = new Notification('info', 'Delete recipe cancelled.')

export const addFailedNotification = new Notification('error', 'Recipe not added - please try again later!')
export const updateFailedNotification = new Notification('error', 'Recipe update failed - please try again later!')
export const deleteFailedNotification = new Notification('error', 'Recipe not deleted - please try again later!')