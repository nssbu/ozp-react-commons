'use strict';

var Reflux = require('reflux');
var createActions = require('../utils/createActions');
var ProfileApi = require('../api/Profile');
var _  = require('../utils/_');

var ProfileActions = createActions({
    fetchNotifications() {
        ProfileApi.fetchNotifications()
            .done(ProfileActions.fetchNotificationsCompleted)
            .fail(ProfileActions.fetchNotificationsFailed);
    },

    dismissNotification(notification) {
        ProfileApi.dismissNotification(notification.id)
            .done(function () {
                ProfileActions.dismissNotificationCompleted(notification);
            })
            .fail(function () {
                ProfileActions.dismissNotificationFailed(notification);
            });
    },

    acknowledgeAllNotifications(notificationList) {
        console.log(notificationList)
        var vm = this;
        console.log('acknowledgeAllNotifications')
        for (let notification of notificationList){
            vm.acknowledgeNotification(notification);
        }
    },

    acknowledgeNotification(notification) {
        notification.acknowledge_status = true;
        console.log(notification);
        ProfileApi.updateNotification(notification)
            .done(function () {
                ProfileActions.acknowledgeNotificationCompleted(notification);
            })
            .fail(function () {
                ProfileActions.acknowledgeNotificationFailed(notification);
            });
    },

    readNotification(notification) {
        notification.read_status = true;
        ProfileApi.updateNotification(notification)
            .done(function () {
                ProfileActions.readNotificationCompleted(notification);
            })
            .fail(function() {
                ProfileActions.readNotificationFailed(notification);
            })
    }
});

_.assign(ProfileActions, Reflux.createActions([
    'fetchProfile',
    'fetchSelf',
    'fetchLibrary',
    'fetchOwnedListings',
    'updateLaunchPreference'
]));

module.exports = ProfileActions;
