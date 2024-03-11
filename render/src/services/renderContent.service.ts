import {sanitize} from "./sanitize.service.ts";

export async function renderContent():Promise<void>{
    const widgetId = window.location.search.replace('?dashboardItemId=', '')
    const response = await fetch(`/api/dataStore/dashboard-information/${widgetId}`).then(res => res.json())
    const html = sanitize(response.body)
    document.getElementById('content')!.innerHTML = html
}