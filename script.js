function gerar() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    let i = Number(num.value)

    if (i == 0) {
        window.alert('Impossível! Digite um número')
    } else {
        tab.innerHTML = ``
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}