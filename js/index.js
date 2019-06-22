var token = 'YOUR INSTAGRAM TOKEN',
    container2 = document.getElementById( 'rudr_userinfo' ),
    scrElement2 = document.createElement( 'script' );
 
window.mishaProcessResult2 = function( response ) {
	container2.innerHTML = '<div><p><img src="' + response.data.profile_picture + '"></p></div>'
		+ '<div><h1>' + response.data.username + '</h1>'
		+ '<p>#' + response.data.id + '</p>'
		+ '<p>' + response.data.counts.media + ' media ' + response.data.counts.followed_by + ' followers ' + response.data.counts.follows + ' follows</p>'
		+ '<p><strong>' + response.data.full_name + '</strong> ' + response.data.bio + '<a href="' + response.data.website + '">' + response.data.website + '</a></p></div>';
}
 
scrElement2.setAttribute( 'src', 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=https://johnny-shin.github.io/SushiCalifornia/index.html' );
document.body.appendChild( scrElement2 );