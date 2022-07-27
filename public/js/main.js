$(document).ready( () => {
    $(".category-delete").on('click', (e) => {
        $target = $(e.target);
        const id = $target.attr('data-cat-id');
        console.log('$target >>', id)
        $.ajax({
            type: 'DELETE',
            url: '/manage/categories/delete/'+id,
            success: (response) => {
                window.location.href='/';
            },
            error: (e) => {
                console.log(e)
            }
        })
    })
})