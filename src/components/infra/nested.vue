<template>
  <draggable class="home" tag="ul" :list="tasks" :group="{ name: 'g1' }">
    <li v-for="el in tasks" :key="el.name">
      <p>{{ el.name }}</p>
      <nested-draggable :tasks="el.tasks" />
    </li>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable';

export default {
  props: {
    tasks: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable
  },
  name: 'nested-draggable'
};
</script>
<style scoped>
/* .dragArea {
  min-height: 50px;
  outline: 1px dashed;
} */
</style>
<style lang="scss" scoped>
 .home{
   ul{
     width:600px;
     overflow: hidden;
     li{
       list-style: none;
       width:200px;
       height:50px;
       line-height: 50px;
       float:left;
       border: 1px solid #dddddd;
       margin:10px;
       position: relative;
     }
   }
  //  p{
  //    width:600px;
  //    overflow: hidden;
  //    span{
  //        display:block;
  //        width:20px;
  //        height:20px;
  //        border-radius:50%;
  //        border:1px solid #000;
  //        line-height: 20px;
  //        font-size:12px;
  //       //  position:absolute;
  //       //  right:0;
  //       //  top:0;
  //      }
  //  }
  
 }
</style>
