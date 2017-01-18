$(function() {

	var slideVisual = $('.slide_visual');
	var thumbIndex = 0;

	var silderControl = function(obj){
		if(obj === "next"){
			thumbIndex++;
		}else if(obj === "prev"){
			thumbIndex--;
		}else{
			thumbIndex = obj;
		}
	}

	$('.paging_main .btn_paging').on('click', function(){
		if($(this).hasClass('btn_prev')){
			silderControl("prev");
		}else {
			silderControl("next");
		}
	});

	function paging() {
		$('.num_page').each(function(idx){
			if(thumbIndex === idx){
				$(this).addClass('on').html((thumbIndex + 1) + '<span class="screen_out">현재페이지</span');
			}else {
				$(this).removeClass('on').html(idx + 1);
			}
		});	
	}
	paging()



});
