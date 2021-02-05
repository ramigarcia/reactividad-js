// Vamos a generar una función constructora
const Component = (function () {
  // Creamos el constructor del componente
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  }

  // Agregamos los métodos al prototípo del constructor del componente
  // El primer método que vamos a agregar el el Render UI. Este nos genera el renderizado de la UI
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);

    console.log(this.data);
  }

  // Ahora necesitamos una función que actualice el estado de forma reactiva
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      // El metodo hasOwnProperty evalua si una llave existe dentro de un objeto
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

    this.render();
  }

  // Tambien necesitamos el método que me permita obtener una copia inmutable del estado
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data))
  }

  return Constructor;
})();