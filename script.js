const URL = 'https://randomfox.ca/floof/'

const imageBlock = document.querySelector('.main-image')
const image = document.querySelector('.main-img  img')
const btn = document.querySelector('.animated-button1')
const history = document.querySelector('.history')
const loader = document.querySelector('.loader')
const loading = document.querySelector('.loading')


const historyArr = []

async function getFox() {
    loader.style.opacity = '1'
    loading.style.opacity = 1


    try{
        const response = await fetch(URL)
        const linkFox = await response.json()
        const linkImage = linkFox.image
        image.src = linkImage
        historyImage(linkImage)
        historyArr.push(linkImage)
    }
    catch(e){
        console.log(e);
    }
    


    loader.style.opacity = '0'
    loading.style.opacity = 0

}

getFox()

btn.addEventListener('click', getFox)



function historyImage(newImage) {
    const historyList = document.createElement('img')     // every time(when func will work) creates new "img" tag that's why we wrote it here in function
    historyList.classList.add('history-image')
    historyList.src = newImage
    history.prepend(historyList)
}


history.addEventListener('click', (e)=> {
    const pressedElem = e.target
    if(pressedElem.classList.contains('history-image')) {
        image.src = pressedElem.src
    }
})









