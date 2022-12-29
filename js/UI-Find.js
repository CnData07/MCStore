$(document).ready(function () {
    var list={}
    list["textures"]="textures/items/apple.png"
    list["name"]="苹果"
    list["id"]="minecraft:apple"
    list["src"]="textures/items/apple.png"
    list["value"]="0"
    list["type"]="items"

    $('#add-li').click(function (){
        addLi(list)
    })

    /**
     * 添加UI-Find元素
     * @param list
     */
    function addLi(list){
        let li=''
        li += `<li>`
        li += `<img class="textures" src="${list.src}" alt="">`
        li += `<div class="info">`
        li += `<span class="name">${list.name}<span class="id">${list.id}</span></span>`
        li += `<span class="info-title">地址</span>`
        li += `<span class="src">${list.src}</span>`
        li += `<span class="info-title">特殊值</span>`
        li += `<span class="value">${list.value}</span>`
        li += `<span class="info-title">分类</span>`
        li += `<span class="type">${list.type}</span>`
        li += `</div>`
        li += `</li>`

        $('#UI-Find').append(li)
    }
});