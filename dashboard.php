<?php
	session_start();
	if (!isset($_SESSION['login'])){

		header('Location: http://localhost/Equiplex/KUSA/flat/admin.php');
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Admin | Dashboard</title>
	<link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/bootstrap-responsive.css" rel="stylesheet" />
    <link href="css/style2.css" rel="stylesheet" />
</head>
<body>
	<div class = 'row-fluid'>
		<div class = 'menu-bar span3'>
			<div class = 'tabbable'>
				<ul class = 'nav nav-list'>
					<li class = 'active'><a href="#pane1" data-toggle= 'tab'>News</a></li>
					<li><a href="#pane2" data-toggle= 'tab'>Events</a></li>
					<li><a href="#pane8" data-toggle= 'tab'>Blogs</a></li>
					<li><a href="#pane4" data-toggle= 'tab'>Slider Photos</a></li>
					<li><a href="#pane5" data-toggle= 'tab'>Current KUSA</a></li>
					<li><a href="#pane6" data-toggle= 'tab'>Users</a></li>
					<li><a href="#pane7" data-toggle= 'tab'>My Account</a></li>
				</ul>
			</div>
		</div>
		<div class = 'tab-content span9'>
			<div class = 'tab-pane active' id = 'pane1'>
				<div class = 'tabbable'>
					<ul class = 'nav nav-tabs'>
						<li class="active"><a href="#tab1" data-toggle="tab">Add</a></li>
						<li><a href="#tab2" data-toggle = 'tab'>Edit</a></li>
						<li><a href="#tab3" data-toggle = 'tab'>Delete</a></li>
					</ul>
					<div class = 'tab-content'>
						<div class = 'tab-pane active' id = 'tab1'>
							<div class = ''>
								<form class= 'form-horizontal' method = 'post' id = 'saveNews' onsubmit = 'return addNews()' >
									<fieldset>
										<legend>Add News Items</legend>
										<div class = 'alert alert-error' id = 'n-error'></div>
										<div class = 'alert alert-success' id = 'n-success'></div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'nhdr'>News Header</label>
											<div class = 'controls'>
												<input name = 'nhdr' id = 'nhdr' type = 'text' required />
											</div>
										</div>
										<div class = 'control-group'>
											<label class ='control-label' for = 'news'>News Description</label>
											<div class = 'controls'>
												<textarea name = 'news' id = 'news'required></textarea>
											</div>
										</div>
										<div class = 'control-group'>
											<div class = 'controls'>
												<button type = 'submit' class = 'btn'>Save</button>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div class = 'tab-pane' id = 'tab2'>
							<form class = 'form-horizontal' id = 'frmeditnews' onsubmit = 'return editNews()'>
								<fieldset>
									<legend>Edit News Item</legend>
									<div class = 'alert alert-error' id = 'n1-error'></div>
									<div class = 'alert alert-success' id = 'n1-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'news-list2'>Select a news item</label>
										<div class = 'controls'>
											<select name = 'news-list2' id = 'news-list'></select>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'hdr-update'>New Header</label>
										<div class = 'controls'>
											<input type = 'text' id = 'hdr-update' name = 'hdr-update' required/>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'news-update'>New Description</label>
										<div class = 'controls'>
											<textarea name = 'news-update' id='news-update' ></textarea>
										</div>
									</div>
									<div class = 'control-group'>
											<div class = 'controls'>
												<button type = 'submit' class = 'btn'>Update</button>
											</div>
										</div>
								</fieldset>
							</form>
						</div>
						<div class = 'tab-pane' id = 'tab3' >
							<form class = 'form-horizontal' id = 'frmdelnews' onsubmit = 'return delNews()'>
								<fieldset>
									<legend>Delete News Item</legend>
									<div class = 'alert alert-error' id = 'n2-error'></div>
									<div class = 'alert alert-success' id = 'n2-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'news-list1'>Select a news item to delete</label>
										<div class = 'controls'>
											<select name = 'news-list1' id = 'news-list1'></select>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'delnews'>News Descsription</label>
										<div class = 'controls'>
											<textarea name = 'delnews' id = 'delnews'disabled></textarea>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button type = 'submit' class = 'btn'>Delete</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class = 'tab-pane' id = 'pane2'>
				<div class = 'tabbable'>
					<ul class = 'nav nav-tabs'>
						<li class="active"><a href="#tab4" data-toggle="tab">Add</a></li>
						<li><a href="#tab5" data-toggle = 'tab'>Edit</a></li>
						<li><a href="#tab6" data-toggle = 'tab'>Delete</a></li>
					</ul>
					<div class = 'tab-content'>
						<div class = 'tab-pane active' id = 'tab4'>
							<div class = ''>
								<form class= 'form-horizontal' id = 'frmaddEvent' onsubmit = 'return addEvent()'>
									<fieldset>
										<legend>Add Event</legend>
										<div class = 'alert alert-error' id = 'event-error'></div>
										<div class = 'alert alert-success' id ='event-success'></div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'event'>Event</label>
											<div class = 'controls'>
												<input type = 'text' name = 'event' id = 'event' required/>
											</div>
										</div>
										<div class = 'control-group'>
											<label class ='control-label' for = 'event-desc'>Event Description</label>
											<div class = 'controls'>
												<textarea name = 'event-desc' id = 'event-desc'></textarea>
											</div>
										</div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'venue'>Venue</label>
											<div class = 'controls'>
												<input type = 'text' name = 'venue' id = 'venue' required/>
											</div>
										</div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'event-date'>Date</label>
											<div class = 'controls'>
												<input type = 'date' name = 'event-date' id = 'event-date' required/>
											</div>
										</div>
										<div class = 'control-group'>
											<div class = 'controls'>
												<button type = 'submit' class = 'btn'>Save</button>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div class = 'tab-pane' id = 'tab5'>
							<form class = 'form-horizontal' id = 'frmeditevents' onsubmit = 'return editEvents()' >
								<fieldset>
									<legend>Edit Event Details</legend>
									<div class = 'alert alert-error' id = 'event1-error'></div>
									<div class = 'alert alert-success' id = 'event1-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'event-list'>Select an event</label>
										<div class = 'controls'>
											<select name = 'event-list' id = 'event-list'>
												<option></option>
											</select>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'event-update'>Event Description</label>
										<div class = 'controls'>
											<textarea name = 'event-update' id = 'event-update' required></textarea>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'event-venue'>Venue</label>
										<div class = 'controls'>
											<input name = 'event-venue' id = 'event-venue' required />
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'event-date2'>Date</label>
										<div class = 'controls'>
											<input type = 'date' name = 'event-date2' id = 'event-date2' required/>
										</div>
									</div>

									<div class = 'control-group'>
											<div class = 'controls'>
												<button type = 'submit' class = 'btn'>Update</button>
											</div>
										</div>
								</fieldset>
							</form>
						</div>
						<div class = 'tab-pane' id = 'tab6'>
							<form class = 'form-horizontal' id = 'frmDevent' onsubmit = 'return deleteEvent()'>
								<fieldset>
									<legend>Delete Event</legend>
									<div class = 'alert alert-error' id = 'event2-error'></div>
									<div class = 'alert alert-success' id = 'event2-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'event-delete'>Select an event to delete</label>
										<div class = 'controls'>
											<select name = 'event-delete' id = 'event-delete'></select>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'del-desc'>Description</label>
										<div class = 'controls'>
											<textarea name = 'del-desc' id = 'del-desc'></textarea>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'del-venue'>Venue</label>
										<div class = 'controls'>
											<input type = 'text' name = 'del-venue' id = 'del-venue' />
										</div>
									</div>	
									<div class = 'control-group'>
										<label class = 'control-label' for = 'del-date'>Venue</label>
										<div class = 'controls'>
											<input type = 'text' name = 'del-date' id = 'del-date' />
										</div>
									</div>	
									<div class = 'control-group'>
										<div class = 'controls'>
											<button type = 'submit' class = 'btn'>Delete</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class = 'tab-pane' id = 'pane8'>
				<div class = 'tababble'>
					<ul class = 'nav nav-tabs'>
						<li class = 'active'><a href = '#tab90' data-toggle = 'tab'>Add Blogposts</a></li>
						<li><a href = '#tab91' data-toggle = 'tab'>Edit Blogposts</a></li>
						<li><a href = '#tab92' data-toggle = 'tab'>Delete Blogposts</a></li>
					</ul>
					<div class = 'tab-content'>
						<div class = 'tab-pane active' id = 'tab90'>
							<form class = 'form-horizontal' id = 'frmaddBlogs' onsubmit = 'return addBlogpost()'>
								<fieldset>
									<legend>Add Blogposts</legend>
									<div class = 'alert alert-error' id = 'blog-error'></div>
									<div class ='alert alert-success' id = 'blog-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'adblog'>Blog Header</label>
										<div class = 'controls'>
											<input type = 'text' name = 'adblog' id = 'adblog' required/>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'blogdesc'>Blog Description</label>
										<div class = 'controls'>
											<textarea name = 'blogdesc' id = 'blogdesc' required/></textarea>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button class = 'btn' type = 'submit'>Save</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
						<div class = 'tab-pane' id = 'tab91'>
							<form class = 'form-horizontal' id = 'frmEditblog' onsubmit = 'return editBlogpost()'>
								<fieldset>
									<legend>Edit Blog Posts</legend>
									<div class = 'alert alert-error' id = 'eblog-error'></div>
									<div class = 'alert alert-success' id = 'eblog-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'edblog'>Select Blog Header</label>
										<div class = 'controls'>
											<select name = 'edblog' id = 'edblog'>
												<option></option>
											</select>
										</div>
									</div>
									<div class ='control-group'>
										<label class = 'control-label' for = 'nbname'>New Blog name</label>
										<div class = 'controls'>
											<input name = 'nbname' id = 'nbname' type = 'text' required/>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'edesc'>Edit Description</label>
										<div class = 'controls'>
											<textarea name = 'edesc' id  = 'edesc' required></textarea>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button class = 'btn' type = 'submit'>Edit</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
						<div class = 'tab-pane' id = 'tab92'>
							<form class = 'form-horizontal' id = 'frmdelBlog' onsubmit = 'return deleteBlog()'>
								<fieldset>
									<legend>Delete Blogpost</legend>
									<div class = 'alert alert-error' id = 'dblog-error'></div>
									<div class = 'alert alert-success' id  = 'dblog-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'delblog'>Select a Blogpost to Delete</label>
										<div class = 'controls'>
											<select name = 'delblog' id = 'delblog'>
												<option></option>
											</select>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'dblog'>Blog Description</label>
										<div class = 'controls'>
											<textarea name = 'dblog' id = 'dblog' disabled /></textarea>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button class = 'btn' type = 'submit'>Delete Blogpost</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class = 'tab-pane' id = 'pane4'>
				<div class = 'tababble'>
					<ul class = 'nav nav-tabs'>
						<li class = 'active'><a href = '#tab9' data-toggle = 'tab'>Add Photos</a></li>
						<li><a href= '#tab10' data-toggle = 'tab'>Delete Photos</a></li>
					</ul>
					<div class = 'tab-content'>
						<div class = 'tab-pane active' id = 'tab9' >
							<form class = 'form-horizontal' id = 'frmaddPhotos' onsubmit = 'return addPhotos()'>
								<fieldset>
									<legend>Add Photos</legend>
									<div class = 'alert alert-error' id  = 'aphoto-error'></div>
									<div class = 'alert alert-success' id = 'aphoto-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'scaption'>Photo Caption</label>
										<div class = 'controls'>
											<input type = 'text' name = 'scaption' id = 'scaption'required />
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'surl'>Select Photo</label>
										<div class = 'controls'>
											<input type = 'file' name = 'surl' id = 'surl' required />
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button type = 'submit' class = 'btn'>Add Photo</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
						<div class = 'tab-pane' id = 'tab10'>
							<form class = 'form-horizontal' id = 'del-slide' onsubmit = 'return deleteSlide()'>
								<fieldset>
									<legend>Delete Photo</legend>
									<div class ='alert alert-error' id = 'dslide-error'></div>
									<div class = 'alert alert-success' id = 'dslide-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'delete-slide'>Select photo to delete</label>
										<select name = 'delete-slide' id = 'delete-slide'>
											<option></option>
										</select>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'prevphoto'>Photo Preview</label>
										<div class = 'controls'>
											<img src="" id = 'prevphoto' />
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button class = 'btn' type = 'submit'>Delete</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class = 'tab-pane' id = 'pane5'>
				<div class = 'tababble'>
					<ul class = 'nav nav-tabs'>
						<li class = 'active'><a href="#tab11" data-toggle = 'tab'>Add Office</a></li>
						<li><a href="#tab12" data-toggle = 'tab'>Office Bearers</a></li>
						<li><a href="#tab13" data-toggle = 'tab'>Edit</a></li>
					</ul>
					<div class = 'tab-content'>
						<div class = 'tab-pane active' id = 'tab11'>
							<form class = 'form-horizontal' id = 'frm-addoffice' onsubmit = 'return addOffice()'>
								<fieldset>
									<legend>Add Office</legend>
									<div class = 'alert alert-error' id = 'office-error'></div>
									<div class = 'alert alert-success' id = 'office-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'office'>Office</label>
										<div class = 'controls'>
											<input type = 'text' name = 'office' id = 'office' required/>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'o-type'>Office Type</label>
										<div class = 'controls'>
											<select name = 'o-type' id = 'o-type'>
												<option></option>
												<option value = '1'>Executive</option>
												<option value = '0'>Non-Executive</option>
											</select>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button class = 'btn' type = 'submit'>Save</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
						<div class = 'tab-pane' id = 'tab12'>
							<div class = 'tababble'>
								<form class = 'form-horizontal' enctype ='multipart/form-data' onsubmit = 'return saveExec()' id = 'saveExec'>
									<fieldset>
										<legend>Executive</legend>
										<div class = 'alert alert-error' id = 'saveExec-error'></div>
										<div class = 'alert alert-success' id = 'saveExec-success'></div>
										<div class = 'control-group'>
										    <label class = 'control-label' for = 'office-exec'>Select an office</label>
											<div class = 'controls'>
												<select name = 'office-exec' id = 'office-exec'>
													<option></option>
												</select>
											</div>
										</div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'exec-name'>Office Bearer</label>
											<div class = 'controls'>
												<input type = 'text'  name = 'exec-name' id = 'exec-name' required />
											</div>
										</div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'exec-photo'>Select Photo</label>
											<div class = 'controls'>
												<input type = 'file' name = 'exec-photo' id = 'exec-photo' required />
											</div>
										</div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'term1'>Term</label>
											<div class = 'controls'>
												<input type = 'text' name = 'term1' id = 'term1' required />
											</div>
										</div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'enarration'>Narration</label>
											<div class = 'controls'>
												<textarea name = 'enarration' id = 'enarration' required></textarea>
											</div>
										</div>
										<div class ='control-group'>
											<div class='controls'>
												<button class = 'btn' type = 'submit'>Save</button>
											</div>
										</div>
									</fieldset>
								</form>
								<form class = 'form-horizontal' id = 'frmnonExec' onsubmit = 'return saveNonexec() '>
									<fieldset>
										<legend>Non-Executive</legend>
										<div class = 'alert alert-error' id = 'nonExec-error'></div>
										<div class = 'alert alert-success' id = 'nonExec-success'></div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'office-non'>Select Office</label>
											<div class = 'controls'>
												<select name = 'office-non' id = 'office-non'>
													<option></option>
												</select>
											</div>
										</div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'nexec-name'>Office Bearer</label>
											<div class = 'controls'>
												<input type = 'text' name = 'nexec-name' id = 'nexec-name' required />
											</div>
										</div>
										<div class = 'control-group'>
											<label class = 'control-label' for = 'term2'>Term</label>
											<div class = 'controls'>
												<input type = 'text' name = 'term2' id ='term2' required />
											</div>
										</div>
										<div class = 'control-group'>
											<div class = 'controls'>
												<button class = 'btn' type = 'submit'>Save</button>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div class = 'tab-pane' id = 'tab13'>
							<form class = 'form-horizontal' id = 'frmExec' enctype ='multipart/form-data' onsubmit = 'return editExec()'>
								<fieldset>
									<legend>Edit Executive</legend>
									<div class = 'alert alert-error' id = 'gedit-error'></div>
									<div class = 'alert alert-success' id = 'gedit-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'sel-term'>Select Term</label>
										<div class = 'controls'>
											<select name = 'sel-term' id = 'sel-term'>
												<option></option>
											</select>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'sel-office'>Select Office</label>
										<div class = 'controls'>
											<select name = 'sel-office' id = 'sel-office'>
												<option></option>
											</select>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button type = 'button' class = 'btn btn-primary' onclick = 'return fetchMatch()'>Search</button>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'edit-name'>Office Holder</label>
										<div class = 'controls'>
											<input type = 'text' name = 'edit-name' id = "edit-name" required />
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'cphoto'>Current Photo</label>
										<div class = 'controls'>
											<img src="" height = '50' width = '50' id = 'cphoto' />
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'edit-desc'>Narration</label>
										<div class = 'controls'>
											<textarea name = 'edit-desc'  id = 'edit-desc' required></textarea>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'edit-photo'>Select Photo</label>
										<div class = 'controls'>
											<input type = 'file' name = 'edit-photo' />
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button type = 'submit' class = 'btn'>Save</button>
										</div>
									</div>
								</fieldset>
							</form>
							<form class = 'form-horizontal' id = 'frmNexec' onsubmit = 'return editnonExec()'>
								<fieldset>
									<legend>Edit Non-Executive</legend>
									<div class = 'alert alert-error' id = 'gnedit-error'></div>
									<div class = 'alert alert-success' id = 'gnedit-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'sel-term2'>Select Term</label>
										<div class = 'controls'>
											<select name = 'sel-term2' id = 'sel-term2'>
												<option></option>
											</select>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'sel-office2'>Select Office</label>
										<div class = 'controls'>
											<select name = 'sel-office2' id = 'sel-office2'>
												<option></option>
											</select>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button class = 'btn btn-primary' type = 'button' onclick = 'return fetchMatch2()'>Search</button>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'edit-name2'>Office Holder</label>
										<div class = 'controls'>
											<input type = 'text' name = 'edit-name2' id = 'edit-name2' required/>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button type = 'submit' class = 'btn'>Save</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class = 'tab-pane' id = 'pane6'>
				<div class = 'tababble'>
					<ul class = 'nav nav-tabs'>
						<li class = 'active'><a href = '#tab13'data-toggle = 'tab' >Add new user</a></li>
						<li><a href = '#tab14' data-toggle = 'tab'>Delete User</a></li>
					</ul>
					<div class = 'tab-content'>
						<div class = 'tab-pane active' id = 'tab13'>
							<form class = 'form-horizontal' id = 'addu' onsubmit = 'return addUser()' method = 'post'>
								<fieldset>
									<legend>Add User</legend>
									<div class = 'alert alert-error' id = 'uadd-error'></div>
									<div class = 'alert alert-success' id = 'uadd-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'uemail'>User Email</label>
										<div class = 'controls'>
											<input type = 'email'  name = 'uemail'id = 'uemail' required/>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'upass1'>Default Password</label>
										<div class = 'controls'>
											<input type = 'password' id = 'upass1' name = 'upass1' required/>
										</div>
									</div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'upass2'>Confirm Default Password</label>
										<div class = 'controls'>
											<input type = 'password' id = 'upass2' name = 'upass2' required/>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button class = 'btn' type = 'submit'>Save</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
						<div class = 'tab-pane' id ='tab14'>
							<form class = 'form-horizontal' method = 'post' onsubmit = 'return delUser()' id = 'frmduser'>
								<fieldset>
									<legend>Delete User</legend>
									<div class = 'alert alert-error' id = 'duser-error'></div>
									<div class = 'alert alert-success' id = 'duser-success'></div>
									<div class = 'control-group'>
										<label class = 'control-label' for = 'del-user'>Delete User</label>
										<div class = 'controls'>
											<select id = 'del-usrs' name = 'del-user'></select>
										</div>
									</div>
									<div class = 'control-group'>
										<div class = 'controls'>
											<button class = 'btn' type = 'submit'>Delete</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class = 'tab-pane' id = 'pane7'>
				<form class = 'form-horizontal' method = 'post' onsubmit = 'return changePass()' id = 'frmcpass'>
					<fieldset>
						<legend>Change Password</legend>
						<div class = 'alert alert-error' id = 'cpass-error'></div>
						<div class = 'alert alert-success' id = 'cpass-success'></div>
						<div class = 'control-group'>
							<label class = 'control-label' for = 'cpass'>Current Password</label>
							<div class = 'controls'>
								<input type= 'password' name = 'cpass' required/>
							</div>
						</div>
						<div class = 'control-group'>
							<label class = 'control-label' for = 'pass1'>New Password</label>
							<div class = 'controls'>
								<input type= 'password' name = 'pass1' id = 'pass1' required/>
							</div>
						</div>
						<div class = 'control-group'>
							<label class = 'control-label' for = 'pass2'>Confirm New Password</label>
							<div class = 'controls'>
								<input type= 'password' name = 'pass2' id = 'pass2' required/>
							</div>
						</div>
						<div class = 'control-group'>
							<div class = 'controls'>
								<button class = 'btn' type = 'submit'>Save</button>
							</div>
						</div>
					</fieldset>
				</form>
				<form class = 'form-inline' method = 'post' action = '../flat/scripts/logout.php'>
					<fieldset>
						<legend>Logout</legend>
						<div class = 'control-group'>
							<div class = 'controls'>
								<button class = 'btn btn-danger'>Logout</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
 <script src="js/jquery/jquery.min.js"></script>
 <script src="js/bootstrap.js"></script>
 <script src="js/script.js"></script>
</body>
</html>