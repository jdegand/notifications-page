(function () {
    let ul = document.querySelector('ul')
    let markReadButton = document.querySelector('button')
    let count = document.querySelector('.header_notifications_count')

    ul.addEventListener('click', (e)=> {
        //e.target.parentElement.parentElement.classList.toggle('highlight')
        let li = e.target.closest('li')
        let currentCount = parseInt(count.innerText)
        
        if(li.querySelector('.notification_dot').classList.contains('display_none')){
            currentCount += 1
            count.innerText = currentCount
            li.classList.add('notification_background')
        } else {
            currentCount -= 1
            count.innerText = currentCount
            li.classList.remove('notification_background')
        }
        li.querySelector('.notification_dot').classList.toggle('display_none')
    })

    markReadButton.addEventListener('click', ()=> {
        let allDots = document.querySelectorAll('.notification_dot');
        let allListItems = document.querySelectorAll('.notification_background');

        allDots.forEach(dot => {
            dot.classList.add('display_none')
        })

        allListItems.forEach(li => {
            if(li.classList.contains('notification_background')){
                li.classList.remove('notification_background')
            }
        })

        count.innerText = '0'
    })

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            let li = e.target.closest('li')
            let currentCount = parseInt(count.innerText)
            
            if(li.querySelector('.notification_dot').classList.contains('display_none')){
                currentCount += 1;
                count.innerText = currentCount;
                li.classList.add('notification_background')
            } else {
                currentCount -= 1;
                count.innerText = currentCount;
                li.classList.remove('notification_background')
            }
            li.querySelector('.notification_dot').classList.toggle('display_none')
        }
            return
      });

})();