import {initDom, MapOf, mockFetch} from "./test.service.ts";
import {renderContent} from "../services/renderContent.service.ts";
import {screen} from '@testing-library/dom'

const dataStore:MapOf<object> = {
    '/api/dataStore/dashboard-information/WelcomeInfo': {
        "body": "<hr style=\"height:10px;background-color:#2c6694\">\n<h2>Welcome to DATIM</h2>\n\n<p style=\"font-size:16px\">Welcome to the DATIM Landing Page app, which offers a centralized way of navigating common resources.</p>\n\n<p>Here you will find standard, curated dashboards and analyses for common programmatic monitoring and evaluation requirements. We highly recommend looking through the many analytic products below before you create your own pivot table or chart—it has likely been created already.</p>\n\n<p>Go to the Dashboard Navigator below to begin.</p>\n\n<p>* <a target=\"_blank\" href=\"/dhis-web-dashboard/\" target=\"_blank\">The Dashboard app</a> is still available to all users. To access personal dashboards or dashboards created and shared by other users, just select the <strong>Dashboard</strong> app in the app tray to be taken to the previous DATIM Dashboard.</p>\n\n<hr style=\"margin-top:30px;height:10px;background-color:#2c6694\">"
    }
}

test(`1 > Render Widget`, async ()=>{
    mockFetch(dataStore)
    initDom()
    await renderContent()
    screen.getByText('Welcome to the DATIM Landing Page app, which offers a centralized way of navigating common resources.')
})