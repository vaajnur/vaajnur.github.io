$(function(){
    $('.js-link-handler').on('click',function(e){
        let link = $(this).data('linkhandler-href');
        if(link){
            e.preventDefault();
            location.href = link;
        }
    })
})