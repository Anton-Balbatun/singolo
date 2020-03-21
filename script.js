let navigation_links = document.querySelector('.navigation')
navigation_links.addEventListener('click', select_navigation_links)

function select_navigation_links () { 
    navigation_links.querySelectorAll('a').forEach(index =>{ index.classList.remove('active')})
    event.target.classList.add('active')
}

document.querySelector('#Arrow_Black_Left').addEventListener('click',switch_slide)
document.querySelector('#Arrow_Black_Right').addEventListener('click',switch_slide)
document.querySelector('#Arrow-left').addEventListener('click',switch_slide)
document.querySelector('#Arrow-right').addEventListener('click',switch_slide)
document.querySelector('.slide').style.display = 'none'
function switch_slide() {
    
    if(document.querySelector('.slide').style.display == 'none'){
        document.querySelector('.slide').style.display = 'block'
        document.querySelector('.slider').style.display = 'none'

    }else{
        document.querySelector('.slide').style.display = 'none' 
        document.querySelector('.slider').style.display = 'block'
    }
}

document.querySelector('#vertical').addEventListener('click',turn_on_vertical)
document.querySelector('#Vertical-Screen').addEventListener('click',turn_on_vertical)
document.querySelector('#horizontal').addEventListener('click',turn_on_horizontal)
document.querySelector('#Horizontal-Screen').addEventListener('click',turn_on_horizontal)
function turn_on_vertical() {
     if(document.querySelector('#Vertical-Screen').style.display == 'none'){
        document.querySelector('#Vertical-Screen').style.display = 'block'
     }else{
        document.querySelector('#Vertical-Screen').style.display = 'none'
     }
}
function turn_on_horizontal() {
     if(document.querySelector('#Horizontal-Screen').style.display == 'none'){
        document.querySelector('#Horizontal-Screen').style.display = 'block'
     }else{
        document.querySelector('#Horizontal-Screen').style.display = 'none'
     }
}
document.querySelector('.portfolio_nav').addEventListener('click',shuffle_cards)

function shuffle_cards() {
    document.querySelector('.portfolio_nav').querySelectorAll('input').forEach(index =>{ index.id = ''})
    event.target.id = 'portfolio_white'
}