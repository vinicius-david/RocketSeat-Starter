var checaIdade = function() {
  return new Promise(function(resolve, reject) {
    var idade = 2;
    if (idade > 18) {
      resolve('Maior que 18');
    } else {
      reject('Menor que 18');
    }
  });
}

// Com o Axios, utilizar apenas => axios.get('https://api.github.com/users/vinicius-david');

checaIdade()
  .then(function() {
    setTimeout(function(){ console.log("Maior que 18"); }, 2000);
  })
  .catch(function() {
    setTimeout(function(){ console.log("Menor que 18"); }, 2000);
  });
