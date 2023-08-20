window.addEventListener('DOMContentLoaded', listener= () =>{
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const year = document.querySelector('#year')
    const btn = document.querySelector('.btn')
    const bookList = document.querySelector('#book-list')

    btn.addEventListener('click', listener=(event=Event) => {
        event.preventDefault()

        //Basic validation

        if(title.value == '' && author.value == '' && year.value == ''){
            alert("please input your information")
        }
        else{
            const newRow = document.createElement('tr')
            
            // creating new title
            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)

            // creating new author
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            // creating new year
            const dataYear = document.createElement('th')
            dataYear.innerHTML = year.value
            newRow.appendChild(dataYear)

            // Displaying in UI
            bookList.appendChild(newRow)

            title.value = ''
            author.value = ''
            year.value = ''
        }
    })
})

