dojo.ready(function(){

	require(["/scripts/dojo/dojo/NodeList-manipulate.js"], 
		function(){
			/*dojo.forEach(dojo.query('a.city'),function(){
				dojo.query(this).attr('href',dojo.query(this).innerHTML());
			});*/
			dojo.query('a.city').attr('href',dojo.query(this).innerHTML());
		}
	);

	var selectedCity = '';
	

	dojo.query('.citySelection').style('display','block');

	dojo.query('.citySelection a').onclick(function(){
		dojo.query('.citySelection').style('display','none');
	})
})