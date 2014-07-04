
function init(){
 	$(document).ready(function(){
	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/fetchusers.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#del-usrs').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.email,dt.email);
		  		$(opt).html(dt.email);
		  		$('#del-usrs').append(opt);
		  	});
		  },
		fail:
		  function(data){

		  }
		});

	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadblog.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#edblog').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.blogname,dt.bid);
		  		$(opt).html(dt.blogname);
		  		$('#edblog').append(opt);
		  		$('#edblog option').click(function (event){
		  		var i = $('#edblog').val();
		  			//event.preventDefault();
		  			$.each(data,function(a,dt2){
		  				if (i == dt2.bid){
		  				  $("#edesc").val(dt2.descrip);
		  				  $('#nbname').val(dt2.blogname);  
		  				}
		  			});

		  			
		  		});	
		  	});
		  },
		fail:
		  function(data){

		  }
		});

$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadblog.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#delblog').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.blogname,dt.bid);
		  		$(opt).html(dt.blogname);
		  		$('#delblog').append(opt);
		  		$('#delblog option').click(function (event){
		  		var i = $('#delblog').val();
		  			//event.preventDefault();
		  			$.each(data,function(a,dt2){
		  				if (i == dt2.bid){
		  				  $("#dblog").val(dt2.descrip);
		  				}
		  			});

		  			
		  		});	
		  	});
		  },
		fail:
		  function(data){

		  }
		});

	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadoffice.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#office-exec').html('');
		  	$('#office-non').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.oname,dt.oid);
		  		$(opt).html(dt.oname);
		  		if (dt.exec == '1')
		  		{
		  			$('#office-exec').append(opt);	

		  		}
		  		else {
		  			$('#office-non').append(opt);
		  			
		  		}
		  		
		  	});
		  },
		fail:
		  function(data){

		  }
		});	


 	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadoffice.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#sel-office').html('');
		  	$('#sel-office2').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.oname,dt.oid);
		  		$(opt).html(dt.oname);
		  		if (dt.exec == '1')
		  		{

		  			$('#sel-office').append(opt);	
		  		}
		  		else {
		  	
		  			$('#sel-office2').append(opt);	
		  		}
		  		
		  	});
		  },
		fail:
		  function(data){

		  }
		});


 	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadTerms.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#sel-term2').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.year,dt.year);
		  		$(opt).html(dt.year);
		  		 $('#sel-term2').append(opt);
		  		
		  	});
		  },
		fail:
		  function(data){

		  }
		});

 	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadTerms.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.year,dt.year);
		  		$(opt).html(dt.year);
		  		 $('#sel-term').append(opt);
		  		
		  	});
		  },
		fail:
		  function(data){

		  }
		});

 	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadslider.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#delete-slide').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.picid,dt.picid);
		  		$(opt).html(dt.picid);
		  
		  			$('#delete-slide').append(opt);	
		  	
		  		});
		  		$('#delete-slide option').click(function (event){
		  		var i = $('#delete-slide').val();
		  			//event.preventDefault();
		  			$.each(data,function(a,dt2){
		  				if (i == dt2.picid){
		  					$('#prevphoto').attr('src','');
		  					$('#prevphoto').attr('src',dt2.photo);
		  				}
		  			});

		  			
		  		});
		  },
		fail:
		  function(data){

		  }
		});	
 	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadevents.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#event-list').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.ename,dt.eid);
		  		$(opt).html(dt.ename);
		  
		  			$('#event-list').append(opt);	
		  	
		  		});
		  		$('#event-list option').click(function (event){
		  		var i = $('#event-list').val();
		  			//event.preventDefault();
		  			$.each(data,function(a,dt2){
		  				if (i == dt2.eid){
		  				  $("#event-date2").val(dt2.date);
		  				  $('#event-update').val(dt2.edesc);
		  				  $('#event-venue').val(dt2.venue);
		  				}
		  			});

		  			
		  		});
		  },
		fail:
		  function(data){

		  }
		});	

 	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadevents.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#event-delete').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.ename,dt.eid);
		  		$(opt).html(dt.ename);
		  
		  			$('#event-delete').append(opt);	
		  	
		  		});
		  		$('#event-delete option').click(function (event){
		  		var i = $('#event-delete').val();
		  			//event.preventDefault();
		  			$.each(data,function(a,dt2){
		  				if (i == dt2.eid){
		  				  $("#del-date").val(dt2.date);
		  				  $('#del-desc').val(dt2.edesc);
		  				  $('#del-venue').val(dt2.venue);
		  				}
		  			});

		  			
		  		});
		  },
		fail:
		  function(data){

		  }
		});	

 	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadnews.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#news-list').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.nid,dt.nid);
		  		$(opt).html(dt.header);
		  
		  			$('#news-list').append(opt);	
		  	
		  		});
		  	$('#news-list option').click(function (event){
		  		var i = $('#news-list').val();
		  			//event.preventDefault();
		  			$.each(data,function(a,dt2){
		  				if (i == dt2.nid){
		  					$('#hdr-update').val(dt2.header);
		  					$('#news-update').val(dt2.description);
		  				}
		  			});

		  			
		  		});
		  		
		  },
		fail:
		  function(data){

		  }
		});


 	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadnews.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$('#news-list1').html('');
		  	$.each(data,function(i,dt){
		  		var opt = new Option(dt.nid,dt.nid);
		  		$(opt).html(dt.header);
		  
		  			$('#news-list1').append(opt);	
		  	
		  		});
		  		$('#news-list1 option').click(function (event){
		  		var i = $('#news-list1').val();
		  			//event.preventDefault();
		  			$.each(data,function(a,dt2){
		  				if (i == dt2.nid){
		  				  $('#delnews').val(dt2.description);
		  				}
		  			});

		  			
		  		});
		  },
		fail:
		  function(data){

		  }
		});

 	$.ajax({
 		type:'get',
 		url:'http://localhost/Equiplex/KUSA/flat/scripts/fetchEdata.php',
 		data:'',
 		dataType:'json',
 		success:
 		  function(data){
 		  	/*$.each(data,function(i,dt){
		  		var opt = new Option(dt.oname,dt.oid);
		  		$(opt).html(dt.oname);
		  		if (dt.exec == '1')
		  		{
		  			//$('').append(opt);	
		  		}
		  		else{
		  			//$('#office-s').append(opt);	
		  		}
		  		
		  	});*/
 		  },
 		fail:
 		  function(data){

 		  }
 	});

 });
}

$(document).ready(function(){
	init();
});
function login(){
	$.ajax({
		type: 'post',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/login.php',
		data:$('#log').serialize(),
		success:
		  function(data){
		  	if (data == '1'){
		  		window.location = "dashboard.php";
		  	}
		  	else{
		  		$('#loginerror').html('');
		  		$('#loginerror').css('display','block');
		  		$('#loginerror').append(data);
		  	}
		  },
		fail:
		  function(data){
		  	console.log(data);
		  }

	});
	return false;
}


function checkPass(){
	pass1 = $("#pass1").val();
	pass2 = $("#pass2").val();
	if (pass1 != pass2){
		return false;
	}
	else{
		return true;
	}
		
}

function changePass(){
	if (checkPass() == true){
		$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/changepass.php',
			data: $('#frmcpass').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#cpass-success").html("");
					$("#cpass-success").append("Password changed");
					$("#cpass-error").css('display','none');
					$("#cpass-success").css('display','block');	
			  	}else{
			  		$("#cpass-error").html("");
					$("#cpass-error").append("Error");
					$("#cpass-success").css('display','none');
					$("#cpass-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	    $("#cpass-error").html("");
					$("#cpass-error").append("Error");
					$("#cpass-success").css('display','none');
					$("#cpass-error").css('display','block');	
			  }
		});
	}
	else{
		$("#cpass-error").html("");
		$("#cpass-error").append("Passwords do not match");
		$("#cpass-error").css('display','block');
		$("#cpass-success").css('display','none');
	}
	return false;
}

function addUser(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/insertusers.php',
			data: $('#addu').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#uadd-success").html("");
					$("#uadd-success").append("User added");
					$("#uadd-error").css('display','none');
					$("#uadd-success").css('display','block');

					init();	
			  	}else{
			  		$("#uadd-error").html("");
					$("#uadd-error").append("Error");
					$("#uadd-success").css('display','none');
					$("#uadd-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	    $("#uadd-error").html("");
					$("#uadd-error").append("Error");
					$("#uadd-success").css('display','none');
					$("#uadd-error").css('display','block');	
			  }
		});
	return false;
}

function delUser(){
		$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/deleteusers.php',
			data: $('#frmduser').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#duser-success").html("");
					$("#duser-success").append("User Deleted");
					$("#duser-error").css('display','none');
					$("#duser-success").css('display','block');	
					$("#del-user").val("");
			  	}else{
			  		$("#duser-error").html("");
					$("#duser-error").append("Error");
					$("#duser-success").css('display','none');
					$("#duser-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	    $("#duser-error").html("");
					$("#duser-error").append("Error");
					$("#duser-success").css('display','none');
					$("#duser-error").css('display','block');	
			  }
		});
		return false;
}

function addOffice(){
		$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/addOffice.php',
			data: $('#frm-addoffice').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#office-success").html("");
					$("#office-success").append("Record Added");
					$("#office-error").css('display','none');
					$("#office-success").css('display','block');
					init();	
					$("#office").val("");
					$("#o-type").val("");
			  	}else{
			  		$("#office-error").html("");
					$("#office-error").append("Error");
					$("#office-success").css('display','none');
					$("#office-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	    $("#office-error").html("");
					$("#office-error").append("Error");
					$("#office-success").css('display','none');
					$("#office-error").css('display','block');	
			  }
		});
		return false;
}

function saveExec(){
	var form = document.getElementById('saveExec');
	var myfd = new FormData(form);

	$.ajax({
		type:'post',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/addExec.php',
		data: myfd,
		processData: false,
		contentType:false,
		success:
		  function(data){
		  	if (data == '1'){
		  		$("#saveExec-success").html("");
				$("#saveExec-success").append("Record Added");
				$("#saveExec-error").css('display','none');
				$("#saveExec-success").css('display','block');	

				init();
				$("#office-exec").val("");
				$("#exec-name").val("");
				$("#exec-photo").val("");	
				$("#term1").val("");
				$("#enarration").val("");
		  	}
		  	else if (data == '2'){
		  		$("#saveExec-error").html("");
				$("#saveExec-error").append("The official already Exists");
				$("#saveExec-success").css('display','none');
				$("#saveExec-error").css('display','block');	
		  	} 
		  	else{
		  		$("#saveExec-error").html("");
				$("#saveExec-error").append("Error");
				$("#saveExec-success").css('display','none');
				$("#saveExec-error").css('display','block');	
		  	}
		  },
		fail:
		  function(data){
		  	$("#saveExec-error").html("");
			$("#saveExec-error").append("Error");
			$("#saveExec-success").css('display','none');
			$("#saveExec-error").css('display','block');	
		  }
	});
	return false;
}

function saveNonexec(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/addnonExec.php',
			data: $('#frmnonExec').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#nonExec-success").html("");
					$("#nonExec-success").append("Record Added");
					$("#nonExec-error").css('display','none');
					$("#nonExec-success").css('display','block');	

					init();
					$("#nexec-name").val("");
					$("#term2").val("");
					$("#office-non").val("");
		
			  	}else{
			  		$("#nonExec-error").html("");
					$("#nonExec-error").append("Error");
					$("#nonExec-success").css('display','none');
					$("#nonExec-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	    $("#nonExec-error").html("");
					$("#nonExec-error").append("Error");
					$("#nonExec-success").css('display','none');
					$("#nonExec-error").css('display','block');	
			  }
		});
		return false;	
}

function fetchMatch(){
		term = $('#sel-term').val();
		office = $('#sel-office').val();

	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadSearch.php',
		data:{office:office,term:term},
		dataType:'json',
		success:
		  function(data){
		  		$('#edit-name').val('');
		  		$('#cphoto').attr('src','');
		  		$('#edit-desc').val('');
		  	if ((data != '0')){
		  		$('#edit-name').val(data.cname);
		  		$('#cphoto').attr('src',data.url);
		  		$('#edit-desc').val(data.narration);
		  	}
		  	
		  	if (data == '0'){
		  		$("#gedit-error").html("");
				$("#gedit-error").append("Error/No match found");
				$("#gedit-success").css('display','none');
				$("#gedit-error").css('display','block');	
		  	}
		  	
		  },
		fail:
		  function(data){
		  	console.log(data);
		  }
	});
	return false;
}

function fetchMatch2(){

		term = $('#sel-term2').val();
		office = $('#sel-office2').val();
		$("#gnedit-error").css('display','none');
	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadSearch.php',
		data:{office:office,term:term},
		dataType:'json',
		success:
		  function(data){
		  	$('#edit-name2').val('');
		  	if ((data != '0')){
		  		$('#edit-name2').val(data.cname);
		  	}
		 
		  	if ( data == '0'){
		  		$("#gnedit-error").html("");
				$("#gnedit-error").append("Error/No match found");
				$("#gnedit-success").css('display','none');
				$("#gnedit-error").css('display','block');	
		  	}

		  },
		fail:
		  function(data){
		  	console.log(data);
		  }
	});
	return false;
}
function addBlogpost(){
	$.ajax({
		type:'post',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/addBlog.php',
		data:$('#frmaddBlogs').serialize(),
		success:
		  function(data){
		  	if(data == '1'){
		  		$("#blog-success").html("");
				$("#blog-success").append("Record Added");
				$("#blog-error").css('display','none');
				$("#blog-success").css('display','block');

				init();
				$('#adblog').val('');
				$('#blogdesc').val('');	
		  	}
		  	else{
		  		$("#blog-error").html("");
				$("#blog-error").append("Error");
				$("#blog-success").css('display','none');
				$("#blog-error").css('display','block');	
		  	}
		  },
		fail:
		  function(data){
		  		$("#blog-error").html("");
				$("#blog-error").append("Error/No match found");
				$("#blog-success").css('display','none');
				$("#blog-error").css('display','block');	
		  }

	});
	return false;
}

function editBlogpost(){
	$.ajax({
		type:'post',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/frmeditBlog.php',
		data:$('#frmEditblog').serialize(),
		success:
		  function(data){
		  	if(data == '1'){
		  		$("#eblog-success").html("");
				$("#eblog-success").append("Record Edit");
				$("#eblog-error").css('display','none');
				$("#eblog-success").css('display','block');

				init();
				$('#edblog').val('');
				$('#nbname').val('');
				$('#edesc').val('');	
		  	}
		  	else{
		  		$("#eblog-error").html("");
				$("#eblog-error").append("Error");
				$("#eblog-success").css('display','none');
				$("#eblog-error").css('display','block');	
		  	}
		  },
		fail:
		  function(data){
		  		$("#eblog-error").html("");
				$("#eblog-error").append("Error");
				$("#eblog-success").css('display','none');
				$("#eblog-error").css('display','block');	
		  }

	});
	return false;
}
function editExec(){
	var form = document.getElementById('frmExec');
	var myfd = new FormData(form);

	$.ajax({
		type:'post',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/editExec.php',
		data: myfd,
		processData: false,
		contentType:false,
		success:
		  function(data){
		  	if (data == '1'){
		  		$("#gedit-success").html("");
				$("#gedit-success").append("Record Added");
				$("#gedit-error").css('display','none');
				$("#gedit-success").css('display','block');	

				$("#office-exec").val("");
				$("#exec-name").val("");
				$("#exec-photo").val("");	
				$("#term1").val("");
				$("#enarration").val("");
		  	}
		  	else{
		  		$("#gedit-error").html("");
				$("#gedit-error").append("Error");
				$("#gedit-success").css('display','none');
				$("#gedit-error").css('display','block');	
		  	}
		  },
		fail:
		  function(data){
		  	$("#gedit-error").html("");
				$("#gedit-error").append("Error");
				$("#gedit-success").css('display','none');
				$("#gedit-error").css('display','block');	
		  }
	});
	return false;
}
function editnonExec(){
	$.ajax({
		type:'post',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/editnonExec.php',
		data: $('#frmNexec').serialize(),
		success:
		  function(data){
		  	if (data == '1'){
		  		$("#gnedit-success").html("");
				$("#gnedit-success").append("Record Added");
				$("#gnedit-error").css('display','none');
				$("#gnedit-success").css('display','block');	

				$("#office-exec").val("");
				$("#exec-name").val("");
				$("#exec-photo").val("");	
				$("#term1").val("");
				$("#enarration").val("");
		  	}
		  	else{
		  		$("#gnedit-error").html("");
				$("#gnedit-error").append("Error");
				$("#gnedit-success").css('display','none');
				$("#gnedit-error").css('display','block');	
		  	}
		  },
		fail:
		  function(data){
		  	$("#gnedit-error").html("");
				$("#gnedit-error").append("Error");
				$("#gnedit-success").css('display','none');
				$("#gnedit-error").css('display','block');	
		  }
	});
	return false;
}

function addPhotos(){
	var form = document.getElementById('frmaddPhotos');
	var myfd = new FormData(form);

	$.ajax({
		type:'post',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/addPhotos.php',
		data: myfd,
		processData: false,
		contentType:false,
		success:
		  function(data){
		  	if (data == '1'){
		  		$("#aphoto-success").html("");
				$("#aphoto-success").append("Record Added");
				$("#aphoto-error").css('display','none');
				$("#aphoto-success").css('display','block');	

				init();
				$('#surl').val('');
				$('#scaption').val('');
		  	}
		  	else{
		  		$("#aphoto-error").html("");
				$("#aphoto-error").append("Error");
				$("#aphoto-success").css('display','none');
				$("#aphoto-error").css('display','block');	
		  	}
		  },
		fail:
		  function(data){
		  	$("#aphoto-error").html("");
				$("#aphoto-error").append("Error");
				$("#aphoto-success").css('display','none');
				$("#aphoto-error").css('display','block');	
		  }
	});
	return false;	
}

function deleteSlide(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/deleteslider.php',
			data: $('#del-slide').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#dslide-success").html("");
					$("#dslide-success").append("Photo Deleted");
					$("#dslide-error").css('display','none');
					$("#dslide-success").css('display','block');	

					init();
					$("#prevphoto").attr('src','');
					$('#delete-slide').val('');

			  	}else{
			  		$("#dslide-error").html("");
					$("#dslide-error").append("Error");
					$("#dslide-success").css('display','none');
					$("#dslide-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	    $("#dslide-error").html("");
					$("#dslide-error").append("Error");
					$("#dslide-success").css('display','none');
					$("#dslide-error").css('display','block');	
			  }
		});
		return false;
}


function deleteBlog(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/delBlog.php',
			data: $('#frmdelBlog').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#dblog-success").html("");
					$("#dblog-success").append("Blog Entry Deleted");
					$("#dblog-error").css('display','none');
					$("#dblog-success").css('display','block');	

					init();
					$("#delblog").val('');
					$('#dblog').val('');

			  	}else{
			  		$("#dblog-error").html("");
					$("#dblog-error").append("Error");
					$("#dblog-success").css('display','none');
					$("#dblog-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	    $("#dslide-error").html("");
					$("#dslide-error").append("Error");
					$("#dslide-success").css('display','none');
					$("#dslide-error").css('display','block');	
			  }
		});
		return false;
}


function addEvent(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/insertevent.php',
			data: $('#frmaddEvent').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#event-success").html("");
					$("#event-success").append("Record Added");
					$("#event-error").css('display','none');
					$("#event-success").css('display','block');	
					
					init();
					$('#event-date').val('');
					$('#event').val('');
					$('#event-desc').val('');
					$('#venue').val('');
			  	}else{
			  		$("#event-error").html("");
					$("#event-error").append("Error");
					$("#event-success").css('display','none');
					$("#event-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	  $("#event-error").html("");
					$("#event-error").append("Error");
					$("#event-success").css('display','none');
					$("#event-error").css('display','block');	
			  }
		});
		return false;
}

function editEvents(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/editevents.php',
			data: $('#frmeditevents').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#event1-success").html("");
					$("#event1-success").append("Record Updated");
					$("#event1-error").css('display','none');
					$("#event1-success").css('display','block');

					init();
					$('#event-list').val('');
					$('#event-update').val('');
					$('#event-date2').val('');
					$('#event-venue').val('');	
					
			  	}else{
			  		$("#event1-error").html("");
					$("#event1-error").append("Error");
					$("#event1-success").css('display','none');
					$("#event1-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	  $("#event1-error").html("");
					$("#event1-error").append("Error");
					$("#event1-success").css('display','none');
					$("#event1-error").css('display','block');	
			  }
		});
		return false;	
}

function deleteEvent(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/deleteevents.php',
			data: $('#frmDevent').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#event2-success").html("");
					$("#event2-success").append("Record Delete");
					$("#event2-error").css('display','none');
					$("#event2-success").css('display','block');	
					
					init();
					$('#del-date').val('');
					$('#event-delete').val('');
					$('#del-desc').val('');
					$('#del-venue').val('');
			  	}else{
			  		$("#event2-error").html("");
					$("#event2-error").append("Error");
					$("#event2-success").css('display','none');
					$("#event2-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	  $("#event2-error").html("");
					$("#event2-error").append("Error");
					$("#event2-success").css('display','none');
					$("#event2-error").css('display','block');	
			  }
		});
		return false;	
}

function addNews(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/insertnews.php',
			data: $('#saveNews').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#n-success").html("");
					$("#n-success").append("Record Added");
					$("#n-error").css('display','none');
					$("#n-success").css('display','block');	

					init();
					$("#nhdr").val('');
					$("#news").val('');
					
			  	}else{
			  		$("#n-error").html("");
					$("#n-error").append("Error");
					$("#n-success").css('display','none');
					$("#n-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	 $("#n-error").html("");
					$("#n-error").append("Error");
					$("#n-success").css('display','none');
					$("#n-error").css('display','block');
			  }
		});
		return false;	
}

function editNews(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/editnews.php',
			data: $('#frmeditnews').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#n1-success").html("");
					$("#n1-success").append("Record Updated");
					$("#n1-error").css('display','none');
					$("#n1-success").css('display','block');

					init();
					$('#news-list').val('');
					$('#hdr-update').val('');
					$('#news-update').val('');	
					
			  	}else{
			  		$("#n1-error").html("");
					$("#n1-error").append("Error");
					$("#n1-success").css('display','none');
					$("#n1-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	 $("#n1-error").html("");
					$("#n1-error").append("Error");
					$("#n1-success").css('display','none');
					$("#n1-error").css('display','block');
			  }
		});
		return false;		
}

function delNews(){
	$.ajax({
			type: 'post',
			url: 'http://localhost/Equiplex/KUSA/flat/scripts/deletenews.php',
			data: $('#frmdelnews').serialize(),
			success:
			  function(data){
			  	if (data == 1){
			  		$("#n2-success").html("");
					$("#n2-success").append("Record Deleted");
					$("#n2-error").css('display','none');
					$("#n2-success").css('display','block');

					init();
					$("#news-list1").val('');	
					$("#delnews").val('');	
					
			  	}else{
			  		$("#n2-error").html("");
					$("#n2-error").append("Error");
					$("#n2-success").css('display','none');
					$("#n2-error").css('display','block');	
			  	}
			  	
			  },
			error:
			  function(data){
			  	 $("#n2-error").html("");
					$("#n2-error").append("Error");
					$("#n2-success").css('display','none');
					$("#n2-error").css('display','block');
			  }
		});
		return false;		
}
