**Repo Owner:** Ben Guaraldi [@benguaraldi](https://github.com/benguaraldi)

# Landing Page app

The Landing Page app is a DHIS2 app for displaying a single dashboard as the landing page for all users of a given DHIS2 instance. This dashboard can allow users to more easily get to where they want to go in DHIS2.

## Installation

[Install the app via the App Hub](https://apps.dhis2.org/app/30a4b86f-882c-490a-b6e1-0d730bfa53ad) or by uploading into the DHIS2 App Management app the zip either from [our releases](https://github.com/pepfar-datim/landing-page-app/releases) or from `npm run build`.

## Adding content to the Landing Page app

By default, the Landing Page app will be blank. To add content, follow these steps:

1. Go to the `Landing Page` app—this will add the Landing Page app's dashboard to your system
2. Go to the `Dashboards` app and find the `Landing Page` dashboard
3. Edit it just as you would a regular dashboard

Note that the Landing Page app does not support any widgets except for the [Rich Text and Video Dashboard Widget](https://github.com/pepfar-datim/dashboard-information-widget/), which allows you to create rich text with links, videos, and other advanced content.

## Defaulting to the Landing Page app

After installation, you may wish to make the Landing Page app the default app whenever a user logs into your DHIS2 instance.  To do this, follow these steps:

1. Go to the `System Settings` app
2. Choose `Appearance` in the left menu
3. Find the `Start page` dropdown
4. Choose `Landing Page` from the dropdown

## Menu setup

Our initial use case with this app was to combine it with the [Rich Text and Video Dashboard Widget](https://github.com/pepfar-datim/dashboard-information-widget/), which allows the creation of a nested menu to navigate a DHIS2 site.

[More information about nested menus can be found here.](https://github.com/pepfar-datim/dashboard-information-widget/blob/main/docs/NestedMenu.md)

## What the app doesn't do

As mentioned above, the Landing Page app currently only shows the [Rich Text and Video Dashboard Widget](https://github.com/pepfar-datim/dashboard-information-widget/),

Also, all users see the same dashboard when they login. There is no way to show different dashboards depending on the user's roles and permissions.
