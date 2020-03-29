document.addEventListener('scroll', onScroll);

function onScroll() {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('.block');
    const links = document.querySelectorAll('.nav__link');
    divs.forEach((element) => {
        if (element.offsetTop-400 <= curPos) { 
            links.forEach((index) => {
                index.classList.remove('active');

                if (element.getAttribute('id') === index.getAttribute('href').substring(1)) {
                    index.classList.add('active');
                }
                
            })
        }
    });
}


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
document.querySelectorAll('.portfolio_nav input').forEach(index =>{index.addEventListener('click',shuffle_cards)})

function shuffle_cards() {
    document.querySelectorAll('.portfolio_nav input').forEach(index =>{ index.id = ''})
    event.target.id = 'portfolio_white'
    let img = [...document.querySelectorAll('.portfolio_grid img')]
    img.sort(()=>Math.random() - 0.5).forEach(index => document.querySelector('.portfolio_grid').appendChild(index))
}

document.querySelectorAll('.portfolio_grid img').forEach(index =>{index.addEventListener('click',border_cards)})

function border_cards(){
    document.querySelectorAll('.portfolio_grid img').forEach(index =>{ index.className = ''})
    event.target.classList = 'img_border'
}

document.querySelector('#submit_button').addEventListener('click',show_modal)

function show_modal(){
    if (document.querySelector('.name').validity.valid && document.querySelector('.email').validity.valid) {
    event.preventDefault();

    subject = document.querySelector('.subject').value;
    message = document.querySelector('.message').value;
    document.querySelector('#sub').innerHTML= `Subject: ${subject}`;
    document.querySelector('#desc').innerHTML= `Description: ${message}`;
    document.querySelector('.modal').style.display = 'block';
    }
}

document.querySelector('.modal').addEventListener('click',close_modal)
document.querySelector('.close_button').addEventListener('click',close_modal)

function close_modal(){
    if(event.target == document.querySelector('.modal') || event.target ==document.querySelector('.close_button') ){
    document.querySelector('.modal').style.display = 'none';
    }
}


