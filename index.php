<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>KUSA |HOME </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />
<script type="text/javascript">
//<![CDATA[
window.__CF=window.__CF||{};window.__CF.AJS={"ga_key":{"ua":"UA-34324154-1","ga_bs":"2"}};
//]]>
</script>
 
<link href="css/reset.css" rel="stylesheet">
<link href="css/foundation.css" rel="stylesheet">
<link href="css/fineliner-init.css" rel="stylesheet">
<link href="css/fineliner-responsivec619.css?v=1.0" rel="stylesheet">



<!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
<link rel="shortcut icon" href="images/favicon.png" />
<link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
	<script type="text/javascript">
/* <![CDATA[ */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34324154-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

(function(b){(function(a){"__CF"in b&&"DJS"in b.__CF?b.__CF.DJS.push(a):"addEventListener"in b?b.addEventListener("load",a,!1):b.attachEvent("onload",a)})(function(){"FB"in b&&"Event"in FB&&"subscribe"in FB.Event&&(FB.Event.subscribe("edge.create",function(a){_gaq.push(["_trackSocial","facebook","like",a])}),FB.Event.subscribe("edge.remove",function(a){_gaq.push(["_trackSocial","facebook","unlike",a])}),FB.Event.subscribe("message.send",function(a){_gaq.push(["_trackSocial","facebook","send",a])}));"twttr"in b&&"events"in twttr&&"bind"in twttr.events&&twttr.events.bind("tweet",function(a){if(a){var b;if(a.target&&a.target.nodeName=="IFRAME")a:{if(a=a.target.src){a=a.split("#")[0].match(/[^?=&]+=([^&]*)?/g);b=0;for(var c;c=a[b];++b)if(c.indexOf("url")===0){b=unescape(c.split("=")[1]);break a}}b=void 0}_gaq.push(["_trackSocial","twitter","tweet",b])}})})})(window);
/* ]]> */
</script>




    <link href="img/favicon.ico"  rel="shortcut icon"/>

    <!-- Stylesheets -->
	<link rel="stylesheet" href="css/font-awesome.css" />
	<!--[if IE 7]>
		<link rel="stylesheet" href="css/font-awesome-ie7.min.css">
	<![endif]-->
	<link rel="stylesheet" href="css/fonts/stylesheet.css">
	
	<link id="scheme" rel="stylesheet" href="css/schemes/dark-blue.css">
	<link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/bootstrap-responsive.css" rel="stylesheet" />

    <link rel="stylesheet" href="css/metro-bootstrap.css" type="text/css"/>
    <link rel="stylesheet" href="css/metro-bootstrap-responsive.css" type="text/css"/>
  	
	<link rel="stylesheet" href="css/responsive.css" />
  
	<link href="css/jcarousel.css" rel="stylesheet" />
	<link href="css/flexslider.css" rel="stylesheet" />
	<link href="css/style.css" rel="stylesheet" />

	<!-- Theme skin -->
	
    <!--metro-->

    <link href="css/metro-bootstrap.css" rel="stylesheet">
    <link href="css/metro-bootstrap-responsive.css" rel="stylesheet">
    <link href="css/docs.css" rel="stylesheet">
    <link href="js/prettify/prettify.css" rel="stylesheet">


    <!-- Load JavaScript Libraries -->
    <script src="js/jquery/jquery.min.js"></script>
    <script src="js/jquery/jquery.widget.min.js"></script>
    <script src="js/jquery/jquery.mousewheel.js"></script>
    <script src="js/prettify/prettify.js"></script>

	<script src="js/fetchData1.js"></script>
    <!-- Metro UI CSS JavaScript plugins -->
    <script src="js/load-metro.js"></script>

    <!-- Local JavaScript -->
    <script src="js/docs.js"></script>
    <script src="js/github.info.js"></script>
    

    
    <?php
	
	require 'connection.php' ;

	$query = 'SELECT * FROM slider';
	$r = mysql_query($query);

	while($row = mysql_fetch_array($r))
	{
    	$data[] = ($row);
	}
	
?>


<style type="text/css">
#tagline>h1,#tagline>h6{
	color: white;

}
#tagline>h1{
	margin-bottom:-6%;
	margin-left: 15%;  
}
 @media only screen and (max-width: 960px) {

    	#tagline>h6{ 
              
              margin-left: 8%;
              padding: 5%;

    	}
   
     }

</style>

</head>

	<body>

			<div id="root-container">

				<div id="header-container" class="content-width">
    
    <!-- Logo -->
    <div id="logo-wrapper">
       
        <div id="tagline">
          <h1>K.U.S.A </h1>
          <h6>Kenyatta University Students' Association</h6>
        </div>
   </div>

   <!-- Menu -->
    <div id="menu-wrapper">
		<div class="menu-column">
        	<ul class="sf-menu sf-vertical main-menu">
	            <li>
	                <a href="index.php" class="active">Home</a>
	            </li>
	            <li>
	                <a href="about.html" >About Us</a>
	                
	            </li>
	            <li>
	                <a href="administration.html" >Administration</a>
	               
	            </li>
	       	</ul>
       	</div>
	       	<div class="menu-column">
	       	<ul class="sf-menu sf-vertical main-menu">
	       		<li>
	                <a href="offices.html" >KUSA Offices</a>
                </li>
                <li>
	                <a href="mission.html" >Mission, vision & Vision</a>
                </li>
	            <li>
	                <a href="blog.html" >Blog & Articles</a>
	             </li>

	        </ul>
       	</div>
		
    	
		
		<nav id="mobile-menu" class="top-bar">
		    <ul class="title-area">
		        <!-- Do not remove this list item -->
		        <li class="name"></li>
		        
		        <!-- Menu toggle button -->
		        <li class="toggle-topbar menu-icon">
		            <a href="#"><span>Menu</span></a>
		        </li>
		    </ul>
		    
		    <!-- Mobile menu's container -->
		    <section class="top-bar-section"></section>
		</nav>
    
    </div>
    
</div> <!-- End id="header-container" -->
			
</div>

	
	<section id="featured">

		<!-- start slider -->
			
              	<!-- Slider -->
                <div id="nivo-slider">
                	<div class="nivo-slider">
                	<?php 
                	for($i= 0 ; $i < count($data) ; $i++){
                	?>
                	<img src="<?php echo $data[$i]['photo'] ;?>" alt="" title="<?php echo $data[$i]['caption']  ?>"  />
                    	
                    	<?php
                		}
                		?>
                    	</div>
                    
					
						</div>
					

		
	</section>

	<section id="content">
		<div class="container">
		

			<div class="row">
					<div class="span4">
						<div class="box aligncenter">
							<div class="aligncenter icon">
								<i class="icon-home icon-circled icon-64 active"></i>
							</div>
							<div class="text">
								<h6>Welcome To KUSA</h6>
								<p>
								Welcome to Kenyatta University Students' Assosiation, the student governing body of <a href = "http://www.ku.ac.ke/">Kenyatta University </a> We exist to make the student life comfortable and to link then stusents community to opportunities outside of school. Every Kenyatta University student is a member of KUSA.
								</p>
								
							</div>
						</div>
					</div>
					
					<div class="span3">
						<div class="box aligncenter">
							<div class="aligncenter icon">
								<i class="icon-folder-open icon-circled icon-64 active"></i>
							</div>
							<div class="text">
								<h6>Who are we ?</h6>
								<p>
								KUSA was created to serve the student community in its pursuit of academic excellence, social welfare, peace, competitiveness in the job market, and integrity 							</p>
								<a href="http://localhost/equiplex/kusa/flat/about.html">Read more</a>
							</div>
						</div>
					</div>
					<div class="span4">
						<div class="box aligncenter">
							<div class="aligncenter icon">
								<i class="icon-user icon-circled icon-64 active"></i>
							</div>
							
							<div class="text">
								<h6>What KUSA is doing ?</h6>
								<p>
								KUSA is keen to ensure that students are kept invloved and informed on various important issues affecting their stay in the University and even after graduation. 
								Which is why we provide information of all the events, achievements and opportunities. 
								</p>
								<a href="http://localhost/equiplex/kusa/flat/blog.html">Visit our blog</a>
							</div>
						</div>
					</div>
			</div>
					
			<!-- divider -->
			<div class="row">
				<div class="span12">
					<div class="solidline"></div>
				</div>
			</div>
			
			
			<!-- end divider -->
				<div class="metro">
				<div class="row">
            
			<div class="span4" >
			
            <div class="span4 bg-cyan padding20 text-center">
            <h2 class="fg-white">News and Updates</h2>
            </div>
			
			<div class="span4">
            	<div class="accordion acd1" id="accordion1">
				
					
									
				</div>	
						</div>
					</div>



			<div class="span4" >
					
			<div class="span4 bg-darker padding20 text-center">
			<h2 class="fg-white">Events and Activities</h2>
            </div>
            <div class="span4">
            		<div class="accordion acd2" id="accordion2">
						
						
											
					</div>	
						</div>
					</div>
			
					<div class="span4" >
					
					<div class="span4 bg-cyan padding20 text-center">
					<h2 class="fg-white">Blog and Posts</h2>
            		</div>
			

            			<div class="span4">
						
								<div class="accordion acd3" id="accordion3">
						
					
						
											
					</div>	
						</div>
						</div>


			</div>
			</div>
			
				
			</div>
					
			
			<!-- divider -->
			<div class="row">
				<div class="span12">
					<div class="solidline"></div>
				</div>
			</div>
			<!-- end divider -->
			
	</section>
	
	<footer class ="metro">
				<div class="container">
				<div class="row">
				<div class="span3">
				<div class="widget">		
						<h5 class="widgetheading fg-cyan">IMPORTANT LINKS</h5>							
						<ul class="link-list">
							<li><a href="FTP.constitution.pdf">KUSA constitution </a></li>
							<li><a href="www.ku.ac.ke/studentemail">Student email</a></li>
							<li><a href="http://portal.ku.ac.ke">Student portal</a></li>
							<li><a href="http://localhost/equiplex/kusa/flat/blog.html">blog</a></li>
							<li><a href="www.ku.ac.ke">Kenyatta University website</a></li>
						</ul>
					</div>
				</div>
				<div class="span3">
					<div class="widget">		
						<h5 class="widgetheading fg-cyan">KUSA INITIATIVES</h5>					
						<ul class="link-list">
							<li><a href="blog">Somesha Mwenzako Kitty</a></li>
							<li><a href="blog">Shuttle services</a></li>
							<li><a href="blog">University Orphaned and Vulnarable students</a></i>
							<li><a href="blog">Campanile Magazine</a></li>
							<li><a href="blog">Study work policy</a></li>
						</ul>					

					</div>		
				</div>
								<div class="span3">
					<div class="widget">
						<h5 class="widgetheading fg-cyan">CONTACTS</h5>
						<address>
							<strong>KENYATTA UNIVERSITY</strong><br>
										KUSA OFFICES,<br>
							 			BUSINESS AND STUDENTS' SERVICE CENTER(BSSC)<br>
							 			P.O. BOX 43844 - 00100
							 			NAIROBI,KENYA.  
						</address>				
						<p class="fg-cyan">
							<i class="icon-phone  fg-cyan "></i> (123) 456-7890	<br>
							<i class="icon-mail  fg-cyan "></i> kusa@ku.ac.ke
						</p>
					</div>
				</div>	

				<div class="span3">
				<div class="widget">
						<h5 class="widgetheading fg-cyan" >SOCIAL MEDIA</h5>
				
					
						<a href="https://www.facebook.com/KUSA"><i class="icon-facebook"  style="padding: 20px;border-radius: 100%; background-color:gray; color:white;"></i></a>
						<a href="https://twitter.com/KUSA"><i class="icon-twitter"  style="padding: 20px;border-radius: 100%; background-color:gray; color:white;"></i></a>

				</div>					
		</div>
		</div>
		<div id="sub-footer">
			<div class="container">
				<div class="span 11">
					 <p><span>&copy; <span class="fg-cyan">Kenyatta Universtiy Student Association </span> : 2014  All right reserved. Designed and Built by :</span> <a href="http://equiplexdevelopers.com" target="_blank" >Equiplex Business Solutions</a></p>
					
				</div>
			</div>
		</div>			
	</footer>
</div>
<a href="#" class="scrollup"><i class="icon-chevron-up icon-square icon-32 active"></i></a>	

    <!-- javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
     <script src="js/jquery.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.isotope.min.js"></script>
	<script src="js/selectnav.min.js"></script>
	<script src="js/jquery.slides.min.js"></script>
	
    <script src="js/jquery.easing.1.3.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/jcarousel/jquery.jcarousel.min.js"></script> 	
	<script src="js/jquery.fancybox.pack.js"></script> 
	<script src="js/jquery.fancybox-media.js"></script> 
	<script src="js/google-code-prettify/prettify.js"></script>		
	 	
	<script src="js/portfolio/jquery.quicksand.js"></script> 
	<script src="js/portfolio/setting.js"></script> 	
	<script src="js/tweet/jquery.tweet.js"></script> 
	<script src="js/jquery.flexslider.js"></script> 
	<script src="js/jquery.nivo.slider.js"></script>
	<script src="js/modernizr.custom.79639.js"></script>
	<script src="js/jquery.ba-cond.min.js"></script>
	<script src="js/jquery.slitslider.js"></script>
	<script src="js/animate.js"></script>
	<script src="js/custom.js"></script>
	
	<script src="js/jquery.cookie.js"></script>

<script src="js/easing.js"></script> <!-- Easing -->
<script src="js/custom.js"></script>


<script src="js/jquery-ui-1.10.2.custom.min.js"></script>
<script src="js/foundation.min.js"></script>
<script src="js/jquery.hoverIntent.js"></script>
<script src="js/superfish.js"></script>
<script src="js/jquery.mousewheel-3.0.6.pack.js"></script>
<script src="js/jquery.fancybox.pack.js"></script>
<script src="js/fancybox-helpers/jquery.fancybox-thumbs.js"></script>
<script src="js/jquery.transit.min.js"></script>
<script src="js/jquery.touchSwipe.min.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/jquery.carouFredSel-6.2.1.js"></script>
<script src="js/jquery.flexslider.js"></script>
<script src="js/jquery.isotope.min.js"></script>
<script src="js/jquery.validationEngine-en.js"></script>
<script src="js/jquery.validationEngine.js"></script>
<script src="js/waypoints.min.js"></script>
<script src="js/finelinerf700.js?v=1.0.1"></script>
	

</body>

</html>