function Article(titolo, corpo){
    this.title= titolo;
    this.body= corpo;
}

function Create_Article(titolo, corpo, vettore, section){
    var Article_n= new Article(titolo, corpo);
    vettore.push(Article_n);
    $('<div class="card bg-dark my-2 mx-2 text-white" style="width: 18rem;"><div class="card-body"><article><header><h5 class="card-title">'+vettore[(vettore.length)-1].title+'</h5></header><p class="card-text">'+vettore[(vettore.length)-1].body+'</p></article><button class="btn btn-outline-info mt-1  button_pub" type="button"><i class="fa fa-unlock"></i></button></div></div>').appendTo(section);
}
function Create_Article_p(titolo, corpo, vettore, section){
    var Article_n= new Article(titolo, corpo);
    vettore.push(Article_n);
    $('<div class="card bg-dark my-2 mx-2 text-white" style="width: 18rem;"><div class="card-body"><article><header><h5 class="card-title">'+vettore[(vettore.length)-1].title+'<i class="fa fa-trophy text-white ml-1"></i></h5></header><p class="card-text">'+vettore[(vettore.length)-1].body+'</p></article><button class="btn btn-outline-info mt-1  button_pub" type="button"><i class="fa fa-unlock"></i></button></div></div>').appendTo(section);
}
$(document).ready(function(){
    var articles= new Array();
    $('#send_article').click(function(){
        var title= $('#recipient-title').val();
        var body=$('#text-body').val();
        console.log(title);
        console.log(body);
        $('#recipient-title').val("");
        $('#text-body').val("");
        $('#modal_insert').modal('hide');
        
        if($('#customRadio1').is(":checked")){
            Create_Article_p(title, body, articles, "#article_section_p");
           console.log("aaa");
            $('#customRadio1').prop('checked', false);
        }else{
            Create_Article(title, body, articles, "#article_section");
            $('#customRadio2').prop('checked', false);
        }
    })
})
$(document).on('click', '.button_pub', function(){
    $(this).removeClass('button_pub');
    $(this).addClass('button_dra');
    $(this).html('<i class="fa fa-lock"></i>');
});
$(document).on('click', '.button_dra', function(){
    $(this).removeClass('button_dra');
    $(this).addClass('button_pub');
    $(this).html('<i class="fa fa-unlock"></i>');
});