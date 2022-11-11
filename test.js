const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');

        }else{
            entry.target.classList.remove('show')
        }
    })
})

const secelements = document.querySelectorAll('.sec');
secelements.forEach((el)=> observer.observe(el));