<?php

class Vehiculo {
    private $nombre;
    public function __construct($nombre){
        $this->nombre = $nombre;
    }
    public function setNombre ($nombre) {
        $this->nombre = $nombre;
    }
    public function getNombre () {
        return $this->nombre;
    }
}

class Bicicleta extends Vehiculo{
    private $pedales;
    public function setPedales($material) {
        $this->pedales = $material;
    }
    public function getPedales() {
        return $this->pedales;
    }
}

class Auto extends Vehiculo{
    private $puertas;
    public function __construct($nombre, $cantidad_de_puertas) {
        parent::__construct($nombre);
        $this->puertas = $cantidad_de_puertas;
    }
    public function setPuertas($cantidad) {
        $this->puertas = $cantidad;
    }
    public function getPuertas() {
        return $this->puertas;
    }

}

$b = new Bicicleta("re loca");
$b->setPedales("plasticos");
echo "nombre: ".$b->getNombre();
echo "\n";

$a = new Auto("Fiat 600", 2);

echo $a->getNombre()." tiene ".$a->getPuertas()." puertas \n";


