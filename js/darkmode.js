$('#nightmode').on('click', function(){
    // Change the moon's icon
    $('#moonman').attr('src', 'assets/whitemoon.png');

    // First removes / adds classes from the body
    $('.lightmode').addClass('darkmode');
    $('.lightmode').removeClass('lightmode');

    /*

    // Next removes / adds classes from the nav-bar
    $('.navbar').addClass('bg-dark');
    $('.navbar').removeClass('bg-waifs');

    //Change backgrounds on dropdown menus in nav-bar
    $('.dropdown-item').addClass('bg-dark');
    $('.dropdown-item').addClass('text-light');
    $('.dropdown-item').addClass('darkmode-hover');
    $('.dropdown-menu').addClass('bg-dark'); 

    */

    // Change backgrounds and texts colors of all divs
    $('.background1').addClass('background1dark');
    $('.background1').removeClass('background1');
    $('.background2').addClass('background2dark');
    $('.background2').removeClass('background2');
    $('.needslighttext').addClass('text-light');
    
    // Changes card bodies
    $('.card').addClass('text-white');
    $('.card').addClass('bg-dark');
    $('.btn-outline-danger').addClass('btn-outline-light');
    $('.btn-outline-danger').removeClass('btn-outline-danger');
    $('.list-group-item').addClass('list-group-item-dark');
});