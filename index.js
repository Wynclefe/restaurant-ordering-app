import {menuArray} from './data.js'

const menuSection = document.getElementById('menu-section')

function getMenuHtml() {
    let menuHtml = ``

    menuArray.forEach(function(menu){
        menuHtml += `
            <div class="menu-section">
                <div class="menu-text">
                    <p class="product-name">${menu.name}</p>
                    <p class="ingredients">${menu.ingredients}</p>
                    <p class="price">${menu.price}</p>
                    <i class="fa-solid fa-plus" data-id="${menu.id}"></i>
                </div>
                <div class="emoji-image>${menu.emoji}</div>
            </div>
        `
    })
}
