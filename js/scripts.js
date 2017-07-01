var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
var textRepalce = text.replace('Velociraptor' , dinosaurUpperCase);
var length = textRepalce.length;
console.log(textRepalce.substr(0, length/2));