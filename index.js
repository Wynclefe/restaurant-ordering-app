import {menuArray} from './data.js'

const menuSection = document.getElementById('menu-section')

function getMenuHtml() {
    let menuHtml = ``

    menuArray.forEach(function(menu){
        menuHtml += `
            <div class="menu-section">
                <p class="emoji-image">${menu.emoji}</p>
                <div class="menu-text">
                    <p class="product-name">${menu.name}</p>
                    <p class="ingredients">${menu.ingredients}</p>
                    <p class="price">$${menu.price}</p>
                </div>
                <button class="add-btn" data-id="${menu.id}">+</button>
            </div>
        `
    })

    return menuHtml
}

function render() {
 menuSection.innerHTML = getMenuHtml()
}

render()