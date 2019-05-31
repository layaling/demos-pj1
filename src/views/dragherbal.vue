<template>
  <div class="row">
    <div class="alldrag" style="width:100%;height:auto;overflow:hidden;">
      <draggable>
        <div class="col-3" v-for="(item,idx) in newDate" :key="idx">
          <h3>Draggable 1</h3>
          <draggable
            class="list-group"
            :list="item.obj"
            group="people"
            @change="log"
            @end="end"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in item.obj"
              :key="element.name"
            >
              {{ element.name }} {{ index }}
            </div>
          </draggable>
        </div>

        <!-- <div class="col-3">
          <h3>Draggable 2</h3>
          <draggable
            class="list-group"
            :list="list2"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list2"
              :key="element.name"
            >
              {{ element.name }} {{ index }}
            </div>
          </draggable>
        </div>

        <div class="col-3">
          <h3>Draggable 3</h3>
          <draggable
            class="list-group"
            :list="list3"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list3"
              :key="element.name"
            >
              {{ element.name }} {{ index }}
            </div>
          </draggable>
        </div> -->
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />

    <rawDisplayer class="col-3" :value="list3" title="List 3" />
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: 'two-lists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable
  },
  data () {
    return {
      newDate: [
        {
          obj: [
            { name: 'John', id: 1 },
            { name: 'Joao', id: 2 },
            { name: 'Jean', id: 3 },
            { name: 'Gerard', id: 4 }
          ]
        },
        {
          obj: [
            { name: 'Juan', id: 5 },
            { name: 'Edgard', id: 6 },
            { name: 'Johnson', id: 7 }
          ]
        },
        {
          obj: []
        }
      ],
      list1: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ],
      list2: [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 }
      ],
      list3: []
    };
  },
  methods: {
    // add: function() {
    //   this.list.push({ name: "Juan" });
    // },
    // replace: function() {
    //   this.list = [{ name: "Edgard" }];
    // },
    // clone: function(el) {
    //   return {
    //     name: el.name + " cloned"
    //   };
    // },
    log: function (evt) {
      window.console.log(evt);
    },
    end (obj) {
      console.log(this.newDate)
    }
    //  draggedContext: 被拖拽元素的上下文 
    //    -index:拖拽元素的指针
    //    -element: 拖拽数据本身
    //    -futureIndex: 拖动后的index
    // relatedContext: 拖入区域的上下文 
    //    -index: 目标元素的index
    //    -element:目标数据本身
    //    -list: 拖入的列表
    
  }
};
</script>

<style>
.alldrag .col-3 {
  float: left;
}
</style>
