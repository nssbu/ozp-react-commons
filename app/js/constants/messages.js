var markingDescription = 'Classification and control marking.';
var markingHelp = 'Follow prompts to generate valid marking.';

var listingMessages = {
    'label.securityMarking': 'Security Marking',
    'label.title': 'Name',
    'label.type': 'Listing Type',
    'label.description': 'Full Description',
    'label.descriptionShort': 'Short Description',
    'label.tags': 'Tags',
    'label.smallIcon': 'Small Icon',
    'label.smallIconMarking': 'Small Icon Security Marking',
    'label.largeIcon': 'Large Icon',
    'label.largeIconMarking': 'Large Icon Security Marking',
    'label.bannerIcon': 'Small Banner',
    'label.bannerIconMarking': 'Small Banner Security Marking',
    'label.featuredBannerIcon': 'Large Banner',
    'label.featuredBannerIconMarking': 'Large Banner Security Marking',
    'label.versionName': 'Version Number',
    'label.intents': 'Intents',
    'label.singleton': 'Singleton',
    'label.contacts': 'Contacts',
    'label.whatIsNew': 'What\'s New',
    'label.isPrivate': 'Private Listing',
    'label.requirements': 'Usage Requirements',
    'label.agencyShort': 'Associated Organization',
    'label.screenshots': 'Screenshots',
    'label.owners': 'Owners',
    'label.docUrls': 'Resources',
    'label.launchUrl': 'Listing URL',
    'label.categories': 'Categories',
    'label.contacts.type': 'Contact Type',
    'label.contacts.name': 'Name',
    'label.contacts.organization': 'Associated Organization',
    'label.contacts.email': 'Email',
    'label.contacts.securePhone': 'Secure Phone',
    'label.contacts.unsecurePhone': 'Unsecure Phone',
    'label.screenshots.largeImage': 'Full Size Image',
    'label.screenshots.largeImageMarking': 'Full Size Image Security Marking',
    'label.screenshots.smallImage': 'Preview Image',
    'label.screenshots.smallImageMarking': 'Preview Image Security Marking',
    'label.docUrls.name': 'Type of Resource',
    'label.docUrls.url': 'URL',

    'placeholder.tags': 'Enter One or More Tags',
    'placeholder.owners': 'Select One or More Owners',
    'placeholder.agencyShort': 'Select an Organization',
    'placeholder.categories': 'Select One or More Categories',
    'placeholder.type': 'Select a Type',
    'placeholder.contacts.type': 'Select a Contact Type',

    'description.securityMarking': 'Classification and control marking for the Listing.',
    'description.title': 'Title of the listing.',
    'description.type': 'Type of listing that is being submitted to the marketplace.',
    'description.categories': 'Category or categories in the marketplace where this listing fits best.',
    'description.tags': 'Keywords that describe the listing.',
    'description.descriptionShort': 'Brief summary of the full description. Appears in the mouseover listing view.',
    'description.description': 'Overview describing the listing, the available features and its purpose. Appears in the detailed listing view.',
    'description.smallIcon': 'Must be at least 16px wide x 16px tall.',
    'description.smallIconMarking': markingDescription,
    'description.largeIcon': 'Must be at least 32px wide x 32px tall.',
    'description.largeIconMarking': markingDescription,
    'description.bannerIcon': 'Must be at least 220px wide x 137px tall.',
    'description.bannerIconMarking': markingDescription,
    'description.featuredBannerIcon': 'Must be at least 600px wide x 376px tall.',
    'description.featuredBannerIconMarking': markingDescription,
    'description.versionName': 'Numerical identification of which release version is being submitted.',
    'description.launchUrl': 'URL where this listing can be reached by users.',
    'description.isPrivate': 'By default, web applications/widgets are visible to all agencies using Apps Mall. If this listing is set to private (only visible to your agency), justification for private use must be included in the Usage Requirements field. A Content Steward will contact you if the justification is not acceptable.',
    'description.requirements': 'Details about what system, security, or other requirements must be met in order to use this listing. If none apply, write "None."',
    'description.whatIsNew': 'Description of what is new or different in this latest version.',
    'description.agencyShort': 'Organization overseeing this listing.',
    'description.owners': 'Person(s) responsible for this listing.',
    'description.contacts': 'Points of contact are people or groups that users can contact via the information provided here.',
    'description.intents': 'Intents are special instructions used for communicating between applications. If this application uses intents, list them here.',
    'description.singleton': 'Most applications can be added to a Webtop multiple times. If this listing is or contains an application that can only support one instance open at a time, please indicate that this listing is a singleton.',
    'description.contacts.email': 'Email address where the contact can be reached',
    'description.contacts.organization': ' Organization associated with the individual, position, or group being contacted.',
    'description.contacts.name': 'Name of the individual, position, or group being contacted.',
    'description.contacts.type': 'What would a user contact this individual or group of people for?',
    'description.screenshots.largeImage': 'Must be at least 960px wide x 600px tall.',
    'description.screenshots.largeImageMarking': markingDescription,
    'description.screenshots.smallImage': 'Must be at least 600px wide x 376px tall.',
    'description.screenshots.smallImageMarking': markingDescription,
    'description.docUrls': 'Documentation, tutorials, or other tools for users to help them better interact with this listing.',
    'description.docUrls.name': 'Type of information or resource (e.g. Wiki, Forum, User Guide, etc.)',
    'description.docUrls.url': ' URL where the resource can be accessed by listing users.',
    'help.securityMarking': markingHelp,
    'help.title': 'May contain letters, numbers or symbols and must be 60 characters long or less.',
    'help.type': 'A listing type is required.',
    'help.description': 'May contain letters, numbers or symbols and must be 4000 characters long or less.',
    'help.descriptionShort': 'May contain letters, numbers or symbols and must be 100 characters long or less.',
    'help.smallIcon': 'Must be a .png, .jpg, or .gif file and must be smaller than 1MB.',
    'help.smallIconMarking': markingHelp,
    'help.largeIcon': 'Must be a .png, .jpg, or .gif file and must be smaller than 1MB.',
    'help.largeIconMarking': markingHelp,
    'help.bannerIcon': 'Must be a .png, .jpg, or .gif file and must be smaller than 1MB.',
    'help.bannerIconMarking': markingHelp,
    'help.featuredBannerIcon': 'Must be a .png, .jpg, or .gif file and must be smaller than 1MB.',
    'help.featuredBannerIconMarking': markingHelp,
    'help.versionName': 'May contain letters, numbers or symbols and must be 255 characters long or less.',
    'help.whatIsNew': 'May contain letters, numbers or symbols and must be 255 characters long or less.',
    'help.requirements': 'May contain letters, numbers or symbols and must be 1000 characters long or less.',
    'help.agencyShort': 'Associated organization is required.',
    'help.screenshots': 'At least one screenshot is required. Each screenshot requires two images, a preview and a full-size screenshot.',
    'help.owners': 'At least one owner is required.',
    'help.tags': 'May contain letters, numbers or symbols and must be 30 characters long or less.',
    'help.launchUrl': 'Must be a valid URL.',
    'help.categories': 'At least one, no more than three, required.',
    'help.contacts.name': 'May contain letters, numbers or symbols and must be 100 characters long or less.',
    'help.contacts.organization': 'May contain letters, numbers or symbols and must be 100 characters long or less.',
    'help.contacts.email': 'Must be a valid email address and 100 characters long or less.',
    'help.contacts.securePhone': 'Must be a valid phone number.',
    'help.contacts.unsecurePhone': 'Must be a valid phone number.',
    'help.screenshots.largeImage': 'Must be a .png, .jpg, or .gif file and must be smaller than 1MB.',
    'help.screenshots.largeImageMarking': markingHelp,
    'help.screenshots.smallImage': 'Must be a .png, .jpg, or .gif file and must be smaller than 1MB.',
    'help.screenshots.smallImageMarking': markingHelp,
    'help.docUrls.name': 'May contain letters, numbers or symbols and must be 255 characters long or less.',
    'help.docUrls.url': 'Must be a valid URL.',

    'recommender.recommended': 'Recommended For You',
    'recommender.similar': 'Similar Listings'
};

module.exports = {
    listingMessages: listingMessages,
    reviewWarningMessage: 'Data entered must NOT be above FOUO'
};
