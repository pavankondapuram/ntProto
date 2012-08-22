dojo.ready(function(){

	require(["scripts/dojo/dojo/NodeList-manipulate"]);

	var selectedCity = '';


	array.forEach(
		var selectedCity = dojo.query('.citySelection a').innerHTML();
		dojo.query('.citySelection a').attr('href',selectedCity);
	);

	dojo.query('.citySelection').style('display','block');

	dojo.query('.citySelection a').onclick(function(){
		dojo.query('.citySelection').style('display','none');
	})
})