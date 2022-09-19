var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  let arrChildren = startEl.children;

  //Condicion de corte
  if(arrChildren === undefined)
    return false;

  if(matchFunc(startEl))
    resultSet.push(startEl) 

  for (let i = 0; i<startEl.children.length;i++) {
    let childResult = traverseDomAndCollectElements(matchFunc,startEl.children[i]) 
 
    resultSet = [...resultSet,...childResult]
   }

  return resultSet;
};  

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {  // '.small'  -  '#small'  -  'div.small' => ["d","i"...]
  // tu código aquí,
  if(selector[0] === '#')
    return 'id'
  if(selector[0] === '.')
    return 'class'
  if(selector.split('').includes('.'))
    return 'tag.class'
  else
    return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector = "div") {
  var selectorType = selectorTypeMatcher(selector);

  var matchFunction; 

  if (selectorType === "id") { 
      matchFunction = function (nodo){
      if ('#'+nodo.id === selector) {return true}
      return false
     }
  } 

  else if (selectorType === "class") {
    matchFunction = nodo => {
      for(let i = 0; i< nodo.classList.length; i++ ) {
      if ('.'+nodo.classList[i] === selector) return true
      }
      return false
    }
  }
    // div small
    else if (selectorType === "tag.class") {
      matchFunction = nodo => {
      let [tag, clase] = selector.split('.')

      return matchFunctionMaker(tag)(nodo)&&matchFunctionMaker('.'+clase)(nodo)
      }
  }else if (selectorType === "tag") {
    matchFunction = nodo => {
      return nodo.tagName.toLowerCase() === selector.toLowerCase()
    }
  }

  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
