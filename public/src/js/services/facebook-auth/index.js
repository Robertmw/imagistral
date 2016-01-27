export default class FBAuth {
	constructor (props) {
		window.fbAsyncInit = () => {
			FB.init({
				appId: props.appId,
				xfbml: props.xfbml,
				version: props.version
			});
		};

		this.login = props.callback;

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		this.checkLoginState = this.checkLoginState.bind(this);
		this.responseApi = this.responseApi.bind(this);
	}

	responseApi (authResponse) {
		FB.api('/me', {fields: 'first_name, last_name, picture'}, (me) => {
			me.accessToken = authResponse.accessToken;
			let payload = {
				first_name: me.first_name,
				last_name: me.last_name,
				avatar: me.picture.data.url
			};

			this.login(payload);
		});
	}

	checkLoginState (response) {
		if (response.authResponse) {
			this.responseApi(response.authResponse);
		} else {
			console.error('Login failed');
		}
	}

	authenticate() {
		FB.login(this.checkLoginState, { scope: 'public_profile' });
	}
};