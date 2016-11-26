<?php 	

include ('database.php');

if ($_POST['data']=='input') {

	$isi_komentar = $_POST['isi_komentar'];
	$query = "INSERT INTO komentar (isi_komentar) VALUES ('$isi_komentar')";

	if (mysqli_query($db,$query)) {
		echo  '1';
	}else {
		echo '0';
	}

}else if ($_POST['data']=='hapus'){

	$id = $_POST['id'];

	$aa = "DELETE FROM komentar WHERE id=$id "; 

	if (mysqli_query($db,$aa)) {
		echo "1";
	}else {
		echo "0";
	}

}else if($_POST['data']=='hapus_semua'){

	$query = "DELETE FROM komentar WHERE id=60 ";
	
	if (mysqli_query($db,$query)) {
		echo "1";
	}else {
		echo "0";
	}
}else if($_POST['data']==='edit'){
	$id = $_POST['id'];
	$komentarbaru = $_POST['komentar_baru'];
	$query ="UPDATE komentar SET isi_komentar='$komentarbaru' WHERE id=$id ";
	if (mysqli_query($db,$query)) {
		echo "1";
	}else{
		echo "0";
	}
}



 ?>