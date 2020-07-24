import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App"> 
    <h1>Actividad clase 10</h1>
    <h4>Tabla de los integrantes del proyecto PPI</h4>
    <table>
        <tr>
            <th>nombre</th>
            <th>apellido</th>
            <th>correo</th>
            <th>teléfono</th>
        </tr>
        <tr>
            <td>jhon esteban</td>
            <td>garcia lopez</td>
            <td>garcialopezj445@gmail.com</td>
            <td>314 6812036</td>
        </tr>
        <tr>
            <td>carolina</td>
            <td>correa</td>
            <td>carocorrea2727@gmail.com</td>
            <td>321 8586752</td>
        </tr>
        <tr>
            <th></th>
            <th></th>
            <th id="title">unifamilia</th>
            <th></th>
        </tr>
    </table>



<h1>¡Consulta!</h1>
      
      <h3>¿Qué es Babel?</h3>
      <p> Es una herramienta que nos permite transformar nuestro código JS de última generación a uno JS que cualquier navegador o versión de Node.js entienda.
      Babel funciona mediante plugins para que le indiquemos que cosas queremos que transforme.</p>
      <p>
        Plugins es una aplicación o programa informatico que se relaciona con otra para agregarle una función nueva y generalmente muy específica. Se usa, por ejemplo, para juegos y aplicaciones.
      </p>

    <h3>¿Qué es WebPack?</h3>
    <p>Es básicamente un empaquetador de módulos, pero gracias a uno de sus componentes, los plugins, puede hacer tareas de todo tipo, como mover directorios, hacer clean up, etc. </p>
    <p>gestióna módulos y sus dependencias, también puede usarse para la concatenación de código, minimización y ofuscación, verificación de buenas prácticas, carga bajo demanda de módulos, entre otros.</p>

    <h3>¿para que se usa en REACT?</h3>
<p>Es una librería Javascript focalizada en el desarrollo de interfaces de usuario, representa una base sólida sobre la cual se puede construir casi cualquier cosa con Javascript. Además facilita mucho el desarrollo, ya que nos ofrece muchas cosas ya listas, en las que no necesitamos invertir tiempo de trabajo.</p>
<p>Sirve para desarrollar aplicaciones web de una manera más ordenada y con menos código que si usas Javascript puro o librerías como jQuery centradas en la manipulación del DOM. Permite que las vistas se asocien con los datos, de modo que si cambian los datos, también cambian las vistas.</p>

    </div>
  );
}

export default App;
