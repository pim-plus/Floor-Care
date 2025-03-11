document.querySelector('button.term-description-toggle')?.addEventListener('click', e => {
    const targetEl = document.querySelector('#description');
    if(targetEl.classList.contains('active')){
        targetEl.classList.remove('active')
    }else{
        targetEl.classList.add('active')
    }
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
});
