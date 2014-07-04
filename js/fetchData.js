$(document).ready(function(){
	$.ajax({
		type:'get',
		url:'http://localhost/Equiplex/KUSA/flat/scripts/loadOffice1.php',
		data:'',
		dataType:'json',
		success:
		  function(data){
		  	count = 0;
		  	var row;
		  	$.each(data,function(i,dt){
		  		var span72;
		  		if ((count%2 == 0) && (dt.exec == '1')){
		  			row = document.createElement('div');
		  			$(row).addClass('row');
		  		}
		  		if (dt.exec == '1'){
		  				
		  			span72 = document.createElement('div');
		  			$(span72).addClass('span7');
		  			$(span72).addClass('bg-cyan');

		  			h2 = document.createElement('h2');
		  			$(h2).addClass('fg-white');
		  			$(h2).append(dt.oid);

			  		wrapper = document.createElement('div');
			  		$(wrapper).addClass('wrapper');

		  			testimonial = document.createElement('div');
		  			$(testimonial).addClass('testimonial');

		  			text = document.createElement('p');
		  			$(text).addClass('text');
		  			$(text).append(dt.narration);

		  			author = document.createElement('div');
		  			$(author).addClass('author');

		  			img = document.createElement('img');
		  			$(img).addClass('img-circle');
		  			$(img).addClass('bordered');
		  			img.setAttribute('src',dt.url);
		  			img.setAttribute('width','100');

		  			cname = document.createElement('p');
		  			$(cname).addClass('name');
		  			$(cname).append(dt.cname);

		  			info = document.createElement('span');
		  			$(info).addClass('info');
		  			$(info).append(dt.cname);

		  			$(author).append(img);
		  			$(author).append(cname);
		  			$(author).append(info);

		  			$(testimonial).append(author);
		  			$(testimonial).append(text);
		  			$(wrapper).append(testimonial);

		  			$(span72).append(h2);
		  			$(span72).append(wrapper);

		  			$(row).append(span72);	
		  			console.log(count);
		  			count+=1;
		  		}
		  		$('.container-main').before(row);

		  		if (dt.exec == '0'){
		  			trow = document.createElement('tr');
		  			tdata1 = document.createElement('td');
		  			$(tdata1).append(dt.oid);

		  			$(trow).append(tdata1);

		  			tdata2 = document.createElement('td');
		  			$(tdata2).append(dt.cname);

		  			$(trow).append(tdata2);

		  			$('.the-table').append(trow);
		  		}	
		  	});
		  
		  },
		fail:
		  function(data){

		  }
	});
	
});