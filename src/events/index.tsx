const darkLightMode = () => {
    const html = document.getElementsByTagName("html")[0];   // Get the html element in the document
    const att = document.createAttribute(`data-theme`);       // Create a attribute
    att.value = "light";                           // Set the value of the attribute
    html.setAttributeNode(att);

    const checkbox: any = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }
}

export { darkLightMode };