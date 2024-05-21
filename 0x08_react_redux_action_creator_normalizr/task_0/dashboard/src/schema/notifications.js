const dataNotif = require('../../../../notification.json');

export function getAllNotificationsByUser(userId){
    return dataNotif.filter(notification => notification.author.id === userId);
}