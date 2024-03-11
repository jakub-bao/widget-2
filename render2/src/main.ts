(async ()=> {
    const widgetId = window.location.search.replace('?dashboardItemId=', '')
    const response = await fetch(`/api/dataStore/dashboard-information/${widgetId}`).then(res => res.json())
    document.getElementById('content')!.innerHTML = response.body
})()