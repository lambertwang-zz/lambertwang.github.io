export enum FONT_NAMES {
    DROID_SANS = 'Droid+Sans',
}

export function loadFont(fontName: string) {
    let head = null;
    try {
        head = document.getElementsByTagName('head')[0];
    } catch (e) {
        console.error('Page not loaded');
        return;
    }

    const node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('href', 'https://fonts.googleapis.com/css?family=' + fontName);

    if (head.childNodes.length) {
        const firstChild = head.childNodes[0];
        head.insertBefore(node, firstChild);
    } else {
        head.appendChild(node);
    }
}
