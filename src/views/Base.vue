<!-- this is an example -->
<template>
 <div>
  <DraggableTree :data="originalData" draggable crossTree ref="tree1" @change="tree1Change" @drag="dragstart">
    <div slot-scope="{data, store}">
      <b v-if="data.children && data.children.length" @click="store.toggleOpen(data)">{{data.open ? '-' : '+'}}&nbsp;</b>
      <p>{{data.con}}</p>
      <span>{{data.text}}</span>
    </div>
  </DraggableTree>
 </div>
</template>

<script>
// import Tree from '@/components/DraggableTree'
export default {
  // components: { DraggableTree },
  data () {
    return {
      originalData: [
       
        { 
          con: 'test'
        },
        { text: 'node 52',
          children: [
            { text: 'node 533' },
            { text: 'node 544' }
          ] },
        { text: 'node 20 undroppable',
          droppable: false,
          children: [
            { text: 'node 31' },
            { text: 'node 41' }
          ] },
        { text: 'node 2',
          children: [
            { text: 'node 3' },
            { text: 'node 4 undroppable', droppable: false }
          ] },
        { text: 'node 30',
          children: []
        },
        { text: 'node 42', draggable: false },
        { text: 'node 32' },
        { text: 'node 45' }
         
      ],
      data: null
    }
  },
  props: {
    ondragstart: { type: Function }
  },
  // computed: {},
  // watch: {},
  methods: {
    tree1Change (node, targetTree) {
      this.data = targetTree.getPureData()
      console.log(node)
    },
    dragstart (node) {
      console.log(node)
      console.log(this.ondragstart)
    }
  }
  // created() {},
  // mounted() {},
}
</script>

<style>
.he-tree{
  border: 1px solid #f00;
  padding: 20px;
  width: 300px;
}
.tree-node-inner{
  padding: 5px;
  border: 1px solid #000;
  cursor: pointer;
}
.draggable-placeholder-inner{
  border: 1px dashed #0088F8;
  box-sizing: border-box;
  background: rgba(0, 136, 249, 0.09);
  color: #0088f9;
  text-align: center;
  padding: 0;
  display: flex;
  align-items: center;
}
/* .tree-node{
  border:1px solid #f00;
}

.tree-node .tree-node-children div{
  border:0 !important;
} */
</style>
