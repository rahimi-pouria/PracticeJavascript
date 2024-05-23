// array of object

const photo = [
   {
      id: 1,
      photo: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Explore The World'
   },
   {
      id: 2,
      photo: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Wild Forest'
   },
   {
      id: 3,
      photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      title: 'Sunny Beach'
   },
   {
      id: 4,
      photo: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      title: 'City on Winter'
   },
   {
      id: 5,
      photo: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Mountains - Cloud'
   }
]


const divitionList = []


const addToDom = () => {
   const container = document.getElementById('showPhoto')
   if(!container) return
   for(let i = 0; i < photo.length; i++){
      const division = document.createElement('div')
      division.classList.add('w-15')
      division.classList.add('rounded')
      division.classList.add('pointer')
      division.classList.add('h-100')
      division.classList.add('position-relative')

   
   
      container.appendChild(division);

// create image
      const imageElement = document.createElement('img');
      imageElement.src = photo[i].photo;
      imageElement.classList.add('object-fite')
      imageElement.classList.add('w-100')
      imageElement.classList.add('h-100')
      division.appendChild(imageElement);


// cretae span
      const span = document.createElement('span')
      const text = document.createTextNode(photo[i].title)
      span.classList.add('position-absolute')
      span.classList.add('bottom')
      span.classList.add('left')
      span.appendChild(text)
      division.appendChild(span)
      
      divitionList.push(division)
      console.log(divitionList)
      // add event click
      divitionList.forEach((div) => {   
         div.addEventListener('click', function() {
            div.classList.remove('w-15')
            div.classList.add('w-100')
            divitionList.forEach((other) => {
               if(other !== this) {
                  other.classList.remove('w-100')
                  other.classList.add('w-15')
                  other.classList.add('effects')
               }
            }) 

         })
      })
   }
}


addToDom()

