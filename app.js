var banners_list = [];

window.onload = (event) => {
	if (localStorage.getItem("banners-data") != null) {
	  	let bannersData = JSON.parse(localStorage.getItem("banners-data"));
		for(let i = 0; i < bannersData.length; i++) {
			let element_id = bannersData[i].element_id;
			let banner_img = bannersData[i].banner_img;
			let redirect_link = bannersData[i].redirect_link;
	
			createNewBanner(element_id, redirect_link, banner_img);
		}
	}
};

function saveToLocalStorage() {
	localStorage.setItem("banners-data", JSON.stringify(banners_list));

	alert("Successfully Saved!");
}

function deleteLocalStorage() {
	localStorage.removeItem("banners-data");
	document.getElementById("banners-list").innerHTML = "";
	
	alert("Successfully Deleted!");
}

function createNewBanner(element_id, redirect_link, banner_img) {
	let bannerHTML = "<a href='"+redirect_link+"' target='_blank'><img class='banner' alt='' src='"+banner_img+"' /></a>";
	var tempDiv = document.createElement('div');
	tempDiv.id = "id-"+element_id;
	tempDiv.innerHTML = bannerHTML;
	document.getElementById("banners-list").appendChild(tempDiv);
}

function submitForm() {
	let element_id = banners_list.length+1;
	let banner_img = document.querySelector('[name="banner_img"]').value;
	let redirect_link = document.querySelector('[name="redirect_link"]').value;

	banners_list.push({
		element_id:element_id,
		redirect_link:redirect_link,
		banner_img:banner_img
	});
	
	createNewBanner(element_id, redirect_link, banner_img);
}