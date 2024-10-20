<template >
  <!-- cartas -->
  <section id="productos">
    
    
    <div class="card text-center">

      <img src="../assets/img/verduras.jpg" class="card-img-top" alt="..." />
     
      <div class="card-body ">
        <h5 class="card-title fw-bold">{{comida.nombre}}</h5>
            <p class="card-text">
           {{comida.descripcion}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio:${{comida.precio}}</li>
            <li class="list-group-item">Cantidad:{{comida.cantidad}}</li>
          </ul>
          <div class="card-body">
            <router-link class="card-link" :to="`/comida/${comida.id}`">Ver más</router-link>
            <router-link class="card-link" :to="`/compra/${comida.id}`">Comprar</router-link>
          </div>


         
        
        
       
    
      </div>
     
    
  
  </section>
</template>
<script>
import router from '@/router'

export default {
  name: 'Card',
  props: {
    comida: Object,
  }
  
}
</script>
<style  scoped>
.Card {
  
  text-align: center;
  font-family: arial;
  
}

</style>