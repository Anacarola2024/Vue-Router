import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Productos',
    name: 'productos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosView.vue'),
    props:(route) => 
      {
        return {
          comidas :[
          
          {
            nombre: "Verduras",
              precio: 1500,
              descripcion: "Contamos con verduras frescas.",
              cantidad: "Para 2 personas",
              Image: "../assets/img/verduras.jpg",
          }
  
        
  
          ],
  
        };
      }
    },
  
    {
      path: '/Contacto',
      name: 'contacto',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
    },
  ]
  



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
