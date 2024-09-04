// backend/apps/home_page/static/js/cep.js
document.addEventListener("DOMContentLoaded", function () {
	const cepField = document.getElementById("id_cep");
	const cityField = document.getElementById("id_city");
	const stateField = document.getElementById("id_state");

	cepField.addEventListener("blur", function (event) {
		const cep = cepField.value.replace(/\D/g, "");
		const url = `https://viacep.com.br/ws/${cep}/json/`;

		if (cep.length === 8) {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					if (!data.erro) {
						cityField.value = data.localidade;
						stateField.value = data.uf;
					} else {
						alert("CEP não encontrado");
					}
				})
				.catch((error) => {
					alert("Erro ao buscar CEP");
					console.log("Erro:", error);
				});
		}
	});
});
