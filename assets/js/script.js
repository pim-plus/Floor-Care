document.querySelectorAll('.tab_title').forEach(el => {
    el.addEventListener('click', e => {
        const currentEl = e.target;
        const targetEl = currentEl.closest('.tab');
        if(targetEl.classList.contains('active')){
            targetEl.classList.remove('active')
        }else{
            targetEl.classList.add('active')
        }
    })
})

$('.select2').select2({
    placeholder: 'Select an option'
  });

  $(document).ready(function () {
    $('.widget-toggle').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).closest('.widget').find('.widget_content').stop().slideToggle();
    });
    $('.svgFilter').click(function (e) {
        e.preventDefault();
        $('#shop_section .left').toggleClass('active');
    });
    $('.btn-close-sidebar svg').click(function (e) {
        e.preventDefault();
        $('#shop_section .left').toggleClass('active');
    });
});
