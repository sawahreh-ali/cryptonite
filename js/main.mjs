import { homeView } from './home-view.js';

$(document).ready(function() {
    route('Home');
    
    $('ul').on('click', 'li', function() {
        // check if route is active so not to request the function route again
        if(!$(this).hasClass('active')){
            route($(this).children().text());
            $('ul li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('#searchBtn').on('click', function(){
        let element = $('#searchInput').val();
        let html = $('#'+ element).html();
        if(!html){
            $('#app').html('<h1>No Coins Were Found!</h1>');
        } 
        else{
            $('#app').html(html);
        }
        $('ul li').removeClass('active');
        $('#searchInput').val('');
    });
});

function route(view) {
    if(view === 'Home') {
        $.get("https://api.coingecko.com/api/v3/coins/list", function( data ) {
            $('#app').html(homeView(data));
        });
    }
    else if (view === 'Live Reports')
        liveReportsView();
    else if(view == 'About')
        aboutView();
}

function liveReportsView() {
    $('#app').html('');
    alert("Live Reports");
}
function aboutView() {
    $('#app').html('');
    alert("About");
}
