// backend/apps/home_page/static/js/cep.js
document.addEventListener("DOMContentLoaded", function () {
	const cepField = document.getElementById("id_addresses-0-cep");
	const addressField = document.getElementById("id_addresses-0-address");
	const neighborhoodField	 = document.getElementById("id_addresses-0-neighborhood");
	const cityField = document.getElementById("id_addresses-0-city");
	const stateField = document.getElementById("id_addresses-0-state");


	cepField.addEventListener("blur", function (event) {
		const cep = cepField.value.replace(/\D/g, "");
		const url = `https://viacep.com.br/ws/${cep}/json/`;

		if (cep.length === 8) {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					if (!data.erro) {
						console.log(data);
						addressField.value = data.logradouro;
						neighborhoodField.value = data.bairro;
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
