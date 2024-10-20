

<template>
    <div class="container py-5">
        <h1 class="text-center">Nuestros Productos</h1>
        <div class="text-center">
            <router-link class="btn btn-primary" to="/">Volver</router-link>
        </div>
    </div>

    <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-4" v-for='(comida, index) in comidas' :key="index">
            <Card :comida="comida" />
        </div>
    </div>
 
        

    
</template>

<script>
import Card from '../components/Card.vue'

export default {
    name: 'ProductosView',
    components: {
        Card,
    },
    props: {
        comidas:{
            type: Array,
            required: true
        }
    }
}






</script>