$(document).ready(function(){
	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/fetchNews.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$(".acd1").html('');
		  	$.each(data,function(i,dt){
		  		agrp = document.createElement('div');
		  		$(agrp).addClass('accordion-group');

		  		aheading = document.createElement('div');
		  		$(aheading).addClass('accordion-heading');

		  		ahd = document.createElement('a');
		  		$(ahd).addClass('accordion-toggle');
		  		ahd.setAttribute('href','#collapsed-'+i);
		  		ahd.setAttribute('data-toggle','collapse');
		  		ahd.setAttribute('data-parent','#accordion1');
		  		$(ahd).append(dt.header);

		  		$(aheading).append(ahd);
		  		$(agrp).append(aheading);

		  		abody = document.createElement('div');
		  		$(abody).addClass('accordion-body');
		  		$(abody).addClass('collapse');
		  		if (i == 0){
		  			$(abody).addClass('in');	
		  		}
		  		abody.setAttribute('id','collapsed-'+i);

		  		inner = document.createElement('div');
		  		$(inner).addClass('accordion-inner');

		  		p = document.createElement('p');
		  		$(p).append(dt.description+"<br/>");
		  		
		  		$(inner).append(p);
		  		$(abody).append(inner);
				
				$(agrp).append(abody);		  		
				$('.acd1').append(agrp);
		  	});
		  	
		  },
		fail:
		  function(data){

		  }
	});

	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/fetchEvents.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$(".acd2").html('');
		  	$.each(data,function(i,dt){
		  		agrp = document.createElement('div');
		  		$(agrp).addClass('accordion-group');

		  		aheading = document.createElement('div');
		  		$(aheading).addClass('accordion-heading');

		  		ahd = document.createElement('a');
		  		$(ahd).addClass('accordion-toggle');
		  		ahd.setAttribute('href','#collapse-'+i);
		  		ahd.setAttribute('data-toggle','collapse');
		  		ahd.setAttribute('data-parent','#accordion2');
		  		$(ahd).append(dt.ename);

		  		$(aheading).append(ahd);
		  		$(agrp).append(aheading);

		  		abody = document.createElement('div');
		  		$(abody).addClass('accordion-body');
		  		$(abody).addClass('collapse');
		  		if (i == 0){
		  			$(abody).addClass('in');	
		  		}
		  		
		  		abody.setAttribute('id','collapse-'+i);

		  		inner = document.createElement('div');
		  		$(inner).addClass('accordion-inner');

		  		p = document.createElement('p');
		  		$(p).append(dt.edesc+"<br/>");
		  		$(p).append("<br/>");
		  		$(p).append("<b>Venue:</b> "+dt.venue+"<br/>");
		  		$(p).append("<br/>");
		  		$(p).append("<b>Date: </b>"+dt.date+"<br/>");

		  		$(inner).append(p);
		  		$(abody).append(inner);
				
				$(agrp).append(abody);		  		
				$('.acd2').append(agrp);
		  	});
		  	
		  },
		fail:
		  function(data){

		  }
	});
	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadBlog2.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	$(".acd3").html('');
		  	$.each(data,function(i,dt){
		  		agrp = document.createElement('div');
		  		$(agrp).addClass('accordion-group');

		  		aheading = document.createElement('div');
		  		$(aheading).addClass('accordion-heading');

		  		ahd = document.createElement('a');
		  		$(ahd).addClass('accordion-toggle collapsed');
		  		ahd.setAttribute('href','#collaps-'+i);
		  		ahd.setAttribute('data-toggle','collapse');
		  		ahd.setAttribute('data-parent','#accordion3');
		  		$(ahd).append(dt.blogname);

		  		$(aheading).append(ahd);
		  		$(agrp).append(aheading);

		  		abody = document.createElement('div');
		  		$(abody).addClass('accordion-body');
		  		$(abody).addClass('collapse');
		  		if (i == 0){
		  			$(abody).addClass('in');	
		  		}
		  		abody.setAttribute('id','collaps-'+i);

		  		inner = document.createElement('div');
		  		$(inner).addClass('accordion-inner');

		  		p = document.createElement('p');
		  		$(p).append(dt.descrip+"<br/>");
		  		
		  		$(inner).append(p);
		  		$(abody).append(inner);
				
				$(agrp).append(abody);		  		
				$('.acd3').append(agrp);
		  	});
		  	
		  },
		fail:
		  function(data){

		  }
	});


});