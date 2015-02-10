var blueberries = {
	name: "Blueberries",
	family: "Vaccinium Corymbosum",
	growsOnShrub: true,
	energy: 240,
	carbohydrates: 14.49,
	protein: 0.74
};

var grapes = {
	name: "Grapes",
	family: "Vitis Vinifera",
	growsOnShrub: false,
	energy: 288,
	carbohydrates:18.1,
	protein: 1.4
};

var redCurrant = {
	name: "Red Currant",
	family: "Ribes Rubrum",
	growsOnShrub: true,
	energy: 234,
	carbohydrates: 13.8,
	protein: 1.4
};

var berries = [blueberries, grapes, redCurrant];

berries.forEach(function(item){
	document.write("<dl>");

	document.write("<h2>" + item.name + "</h2>");

	document.write("<dt>family</dt>");
	document.write("<dd>" + item.family + "</dd>");

	document.write("<dt>growsOnShrub:</dt>");
	document.write("<dd>" + item.growsOnShrub + "</dd>");

	document.write("<dt>energy</dt>");
	document.write("<dd>" + item.energy + "</dd>");

	document.write("<dt>carbohydrates</dt>");
	document.write("<dd>" + item.carbohydrates + "</dd>");

	document.write("<dt>protein</dt>");
	document.write("<dd>" + item.protein + "</dd>");

	document.write("</dl>");
});