export default function minifyHtmlPlugin() {
    return {
        name: 'transform-file',
        transform(src, id) {
            console.log(id)
            if (id.includes('css')) return {
                code: src.replace(/\s|\n/gm, '').replace(/\/\*.+?\*\//g,'')
            }
        },
        transformIndexHtml(html){
            return html.replace(/\n/gm, '').replace(/>\s+?</g,'><')
        }
    }
}