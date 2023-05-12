const formLogin = document.getElementById('form-login');
const emailLogin = document.getElementById('email-login');
const passwordLogin = document.getElementById('password-login');


// ------------------ LOGIN ------------------ //

formLogin?.addEventListener('submit', async (e) => {
	e.preventDefault();

	const email = emailLogin.value;
	const password = passwordLogin.value;

	const response = await axios.post("https://localhost:7154/api/users/authenticate", { email, password });
	const responseData = response.data;
	const isAuth = responseData.isUserExisted;

	if (isAuth) {
		sessionStorage.setItem('AUTH', JSON.stringify(responseData));
		window.location.href = '../index.html';
	}
});

