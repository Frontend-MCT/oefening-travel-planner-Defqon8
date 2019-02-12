console.log("Happy Freeza Day!!");

const showCountries = jsonResponse => {
    let countries = "";
    console.log(jsonResponse);
    for(const c of jsonResponse){
        countries += `
        <article class="load-in">
            <input id="${c.alpha2Code}" class="o-hide c-country-input" type="checkbox" name="" value="">
            <label for="${c.alpha2Code}" class="c-country js-country">
                <div class="c-country-header">
                    <h2 class="c-country-header__name">${c.name}</h2>
                    <img class="c-country-header__flag"src="${c.flag}" alt="The flag of Belgium">
                </div>
                <p class="c-country__native-name">${c.nativeName}</p>
            </label>
        </article>`

    }
    document.getElementsByClassName('js-country-holder')[0].innerHTML = countries;
};

const fetchCountries = region =>{
	const endpoint = "https://restcountries.eu/rest/v2/region/" + region;
	// Met de fetch API proberen we de data op te halen.
	fetch( `${endpoint}` )
	.then(function(response){
        console.log(endpoint);
		return response.json();
	})
	.then(function(jsonResponse){
		   showCountries(jsonResponse);
	})
	.catch(function(error){
		console.error("Error = ", error);
	});
};

const enableListeners = () => {
    // 1 get buttons
    const regionButtons = document.querySelectorAll(".js-region-select");

    // 2 listen to clicks
    for(const button of regionButtons){
        button.addEventListener("click", function(){
            console.log(this.getAttribute('data-region'));
            // 2.1 look up the data properly
            const region = this.getAttribute('data-region');

            // 2.2 get data from api
            fetchCountries(region);
        });
    }
    // countryHolders

};

const init = () =>{
    enableListeners();
    console.log('Shut the hell up Nappa!');
};

document.addEventListener("DOMContentLoaded", init);
