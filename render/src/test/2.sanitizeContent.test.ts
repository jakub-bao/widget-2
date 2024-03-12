import {initDom, MapOf, mockFetch} from "./test.service.ts";
import {renderContent} from "../services/renderContent.service.ts";
import {screen} from '@testing-library/dom'

const dataStore:MapOf<object> = {
    '/api/dataStore/dashboard-information/WidgetId': {
        "body": "<script>console.log('test')</script>content"
    }
}

test(`2 > Sanitize Content`, async ()=>{
    mockFetch(dataStore)
    initDom()
    await renderContent()
    screen.getByText('content')
    expect(document.body.innerHTML).not.includes('console.log')
})