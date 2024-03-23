const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const postGrid = document.getElementById('post-grid')
const quoteTemplate = document.getElementById('quoteTemplate').content
const getPostBtn = document.getElementById('getPostBtn')



const getPost = async (url) => {
    try{
        const resp = await fetch(url)
        const postList = await resp.json()
        postList.forEach( post => {
            renderPost(post)
        })        

    } catch(err){
        console.log(err)
    }
}

function renderPost(post){
    quoteTemplate.querySelector(".card-header").textContent = `${post.id}. ${post.title}`
    quoteTemplate.querySelector(".blockquote p").textContent = post.body
    quoteTemplate.querySelector(".blockquote-footer").textContent = `Autor N° ${post.userId}`
    let clone = document.importNode(quoteTemplate,true)           
    postGrid.appendChild(clone)        
}


getPostBtn.addEventListener('click', () => getPost(API_URL))


