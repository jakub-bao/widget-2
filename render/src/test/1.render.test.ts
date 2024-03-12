import {initDom, MapOf, mockFetch} from "./test.service.ts";
import {renderContent} from "../services/renderContent.service.ts";
import {screen} from '@testing-library/dom'

const dataStore:MapOf<object> = {
    '/api/dataStore/dashboard-information/WidgetId': {
        "body": "Widget content"
    }
}

test(`1 > Render Widget`, async ()=>{
    mockFetch(dataStore)
    initDom()
    await renderContent()
    screen.getByText('Widget content')
})