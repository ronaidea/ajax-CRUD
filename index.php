<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>belejar php mysqli</title>
	<script src="jquery-3.1.1.min.js"></script>
	<style>
		textarea{
			padding: 20px;
			box-sizing:border-box;
			max-width: 100%;
			min-width:100%;
		}
		body {
			width: 50%;
		}
		.hide {
			display: none;
			color:red;
		}
		.hasil_komentar {
			display: block;
			margin:  10px 0px;
			background-color: #F2F2F2;
			box-sizing:border-box;

		}
		.hasil_komentar > div:first-child{
			padding: 10px;
			background-color: #6ABCBA;
		}
		.edhap {
			float: left;
			display: inline-block;
			padding: 10px;
			width: 50%;
			text-align: center;
			background-color: #CAA953;
			color:white;
			cursor: pointer;
			box-sizing:border-box;
		}
		.hapus {
			background-color: #848484
		}
	</style>
</head>
<body>
<!-- belajar ajax -->
<?php include('database.php'); ?>

<h1>komentar pakai ajak</h1>

<div>
	<textarea name="isi_komentar" id="isi_komentar" rows="10"></textarea>
</div>
<div>
	<input type="submit" value='komentar' id='komentar'>
</div>
<hr>


<input type="submit" value='hapus semua komentar' id='hapus_semua'>



<output id="hasil">
<?php 	
	include ('database.php');
	$query = "SELECT * FROM komentar ORDER BY id DESC";
	$data = mysqli_query($db,$query);

	foreach ($data as $data) { ?>
		<div class="hasil_komentar" id='<?php echo $data["id"]; ?>'>
			<div class="isikom<?php echo $data['id']; ?>" > <?php echo $data["isi_komentar"]; ?></div>
			<span class="edit edhap edit<?php echo $data["id"]; ?>" data-id="<?php echo $data['id']; ?> ">edit komentar</span>
			<span class="hapus edhap" data-id='<?php echo $data["id"]; ?>'>hapus komentar</span>
			<div id="" style="clear:both"></div>
		</div>

	<?php 	}

 ?>


</output>

<script src='script.js'>
</script>
</body>
</html>



