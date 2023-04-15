// Definición de la clase Mascota
class Mascota {
    constructor(nombre, edad, tipoAnimal) {
      this.nombre = nombre;
      this.edad = edad;
      this.tipoAnimal = tipoAnimal;
    }
  }
  
  // Creación de una instancia de la clase Mascota
  const miMascota = new Mascota("Fido", 3, "Perro");
  
  // Mostrar la información de la mascota en el navegador
  document.write("Nombre: " + miMascota.nombre + "<br>");
  document.write("Edad: " + miMascota.edad + " años" + "<br>");
  document.write("Tipo de animal: " + miMascota.tipoAnimal + "<br>");