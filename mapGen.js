function MapGen() {
  this.cMap = [];

  this.createLevel = function (diffuclty,type) {
    return map = [[{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'grass'}, {type: 'dirt'}, {type: 'grass'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'grass'}, {type: 'dirt'}, {type: 'grass'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'grass'}, {type: 'dirt'}, {type: 'grass'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'grass'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'grass'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'grass'}, {type: 'grass'}, {type: 'grass'}, {type: 'grass'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'dirt'}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}], [{type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}, {type: 'ocean', canStep: false}]]
  }
}
