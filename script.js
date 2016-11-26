$(document).ready(function() {

	// insert komentar
	$('#komentar').click(function() {
		// ambil isi komentar
	 	var isi_komentar = $('#isi_komentar').val();
	 	// ambil id komentar
	 	var id = parseInt($('.hasil_komentar').first().attr('id'));
	 	var id = id + 1;
	 	$.ajax({
	 		method : "POST",
	 		url: "komentar.php",
	 		data : {isi_komentar : isi_komentar , data:'input'},
	 		success: function(data){

	 			if (data == '1'){
	 				$('#hasil').prepend('<div class="hasil_komentar" id='+ id +'><div class="isikom'+id+'">'+isi_komentar+'</div><span class="edit edhap" data-id='+id+'>edit komentar</span><span class="hapus edhap" data-id='+id+'>hapus komentar</span><div id="" style="clear:both"></div></div>');
	 			}else {
	 				console.log(data);
	 			}

	 		}
	 	});
	});

	$('#hapus_semua').click(function(){
		$('#hasil').fadeOut('slow');
		$.ajax({
			method : "POST",
			ur: 'komentar.php',
			data : {hapus : 'hapus_semua'},

			success : function(data){
				if (data == '1'){
					console.log('berhasil menghapus data');
				}else{
					console.log(data);
				}
			}

		});
	});


	$(document).on('click','.hapus', function(){

	 	var id = $(this).parent('.hasil_komentar').attr('id');
	 	$(this).parent('.hasil_komentar').fadeOut();
	 	$.ajax({
	 		method : 'POST',
	 		url : 'komentar.php',
	 		data : { id : id , data : 'hapus'},
	 		success : function(data){
	 			if (data=='1'){
	 			}else {
	 				console.log(data);
	 			}
	 		}
	 	});

	 });


	// klik edit
	$(document).on('click','.edit', function(){

		// ambil id edit
		var id =$(this).attr('data-id');
		// nilai komentar lama
		var komen_lama = $(this).siblings('.isikom'+id).text();
		// bikin text area baru 
		var textarea = $(document.createElement('textarea')).attr('class', 'textarea textarea_'+id).text(komen_lama);
		// ganti komen lama dengan text area
		$('.isikom'+id).replaceWith(textarea);
		// bikin element update
		var update = $(document.createElement('span')).attr({
				'class':'update edhap update'+id,
				'data-id':id
			}).text('update komentar');
		$(this).replaceWith(update);

		// ganti update jadi edit komentar
		// var edit = $(document.createElement('span')).attr({
		// 		'class':'edit edhap edit'+id,
		// 		'data-id':id
		// 	}).text('edit komentar');
		// $('.update').not('.update'+id).replaceWith(edit);

		// // ganti text area kembali ke semula
		// var div = $(document.createElement('div')).attr('class','isikom'+id).text(komen_lama);
		// // replace textarea
		// $('.textarea').not('.textarea_'+id).replaceWith(div);



	 });

	// klik update
	$(document).on('click', '.update', function() {

		// ambil id
		var id = $(this).attr('data-id');
		// ambil nilai komentar baru
		var komentar_baru = $('.textarea_'+id).val();
		console.log(komentar_baru);
		// buat element div
		var div = $(document.createElement('div')).attr('class','isikom'+id).text(komentar_baru);
		// replace textarea
		$('.textarea_'+id).replaceWith(div);
		// ganti update jadi edit komentar
		function update_jadi_edit(){
			var edit = $(document.createElement('span')).attr({
					'class':'edit edhap edit'+id,
					'data-id':id
				}).text('edit komentar');
			return edit;
		}

		$(this).replaceWith(update_jadi_edit);

		$.ajax({
			url:'komentar.php',
			method:'POST',
			data : {id:id,data:'edit',komentar_baru :komentar_baru },

			success : function(){
				if (data = '1'){
					console.log('berhasil diubah');
					
					$('.isikom'+id).append('<div class="hide hide_'+id+' info_succes_'+id+'">komentar berhaisl dirubah</div>');

					$('.hide_'+id).slideDown();

					$('.info_succes_'+id).delay(900).fadeOut();

				}else {
					console.log('gagal ubah');
				}
			}
		});

	});




});

