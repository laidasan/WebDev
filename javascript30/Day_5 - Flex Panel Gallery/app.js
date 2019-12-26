(function() {
    const banner__wrap = document.querySelectorAll('.banner-wrap');
    let i = 1;

    function onClick(e) {
        console.log(e.currentTarget);
        let wrap = e.currentTarget;
        wrap.style.setProperty('flex',)
    }
    banner__wrap.forEach(function(wrap){
        wrap.addEventListener('click',onClick);
    })

})();