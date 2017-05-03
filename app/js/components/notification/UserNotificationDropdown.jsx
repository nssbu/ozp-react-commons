'use strict';

var React = require('react');
var Reflux = require('reflux');
var cx = React.addons.classSet;
var _ = require('../../utils/_.js');

var UserNotifications = require('./UserNotifications.jsx');

var SelfStore = require('../../stores/SelfStore.js');
var ProfileActions = require('../../actions/ProfileActions.js');

var UserNotificationDropdown = React.createClass({

    mixins: [
        Reflux.connect(SelfStore)
    ],

    // TODO: remove when reflux is upgraded to v0.2
    getInitialState() {
        return {
            notifications: null
        };
    },

    openDropdown() {
         console.log('markallacknowledged')
        var notifications = this.props.notifications;
        ProfileActions.AcknowledgeAllNotifications(notifications);
        if($(this.getDOMNode()).find('.UserNotification').length > 1) {
            $(this.getDOMNode()).addClass('open');
        }
    },

    componentDidMount() {
        ProfileActions.fetchNotifications();
    },

    render() {
        console.log('WTF')
        var notifications = this.state.notifications;
        var unacknowledgedNotifications = _.filter(notifications, function(n){ return !n.acknowledged_status});
        var hasUnacknowledgedNotifications = unacknowledgedNotifications && unacknowledgedNotifications.length > 0;
        var hasNotifications = notifications && notifications.length > 0;
        var bellClassNames = cx({
            'icon-bell-filled-blue': hasNotifications,
            'icon-bell-grayLightest': !hasNotifications,
            activeIcon: unacknowledgedNotifications
        });

        var notificationButtonClasses = cx({
          'dropdown': true,
          'tooltiped': true,
          'disabled': !hasNotifications
        });

        var tooltip = (hasUnacknowledgedNotifications) ? (unacknowledgedNotifications.length > 1) ? `${unacknowledgedNotifications.length} new notifications` : `${unacknowledgedNotifications.length} new notification` : 'No new notifications';

        return (
            <li data-toggle="tooltip" data-placement="bottom" data-original-title={tooltip} className={notificationButtonClasses} id="notification-dropdown">
                <a href="#" data-toggle="dropdown" id="tourstop-notifications" onClick={this._acknowledgeAll()}>
                    <i className={bellClassNames}></i>
                    <span className="hidden-span"> notifications, {(this.state.notifications) ? this.state.notifications.length : 0} unread notifications</span>
                    {hasNotifications && <span className="NotificationBadge" data-badge={this.state.unacknowledgedNotifications.length}></span>} 
                </a>
                {
                    hasNotifications &&
                        <UserNotifications updateHud={this.props.updateHud} notifications={notifications} openDropdown={this.openDropdown} moreNotifications={this.props.moreNotifications}/>
                }
            </li>
        );
    }

});

module.exports = UserNotificationDropdown;
