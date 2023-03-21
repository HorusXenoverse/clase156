// Registro del componente en Collider.js.
AFRAME.registerComponent("flying-birds", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //ID
      var id = `hurdle${i}`;

      //Variables de posición.
      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      //Llamar a la función.
      this.flyingBirds(id, position);
    }
  },
  flyingBirds: (id, position) => {
    //Obtener el elemento del terreno.
    var terrainEl = document.querySelector("#terrain");

    //Crear la entidad modelo del pájaro.
    var birdEl = document.createElement("a-entity");

    //Establecer múltiples atributos.
    birdEl.setAttribute("id", id);

    birdEl.setAttribute("position", position);
    birdEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

    //Establecer el atributo del modelo gLTF.
    birdEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

    //Establecer el mezclador de animación de los modelos con animación.
    birdEl.setAttribute("animation-mixer", {});

    //Establecer el cuerpo estático del sistema físico.
    birdEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 3.2,
    });

    //Establecer el atributo de juego.
    birdEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    //Agregar la entidad pájaro como hijo de la entidad terreno.
    terrainEl.appendChild(birdEl);
  },
});
