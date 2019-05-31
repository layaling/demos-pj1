<template>
  <div>
    <div class="home" style="border:1px solid #000;" :class="{ifMove:move}">
      <draggable element="ul" v-model="list" :options = "{animation:500}" style="overflow:hidden;" ref="listIn">
        <li v-for="(item,index) in list" :key="index">
          <p>{{item.name}}</p>
        </li>
      </draggable>

      <draggable element="ul" :options = "{animation:500,draggable:'.candrug'}" class="differ-icon"  @start="dragstart"  @end="dragend">
        <li class="candrugno" style="border:0px;">
          <p style="width:30px;height:30px;font-size:12px;line-height:30px;border-radius:50%;position:absolute;top:-220px;left:0">君</p>
        </li>
        <li class="candrug" v-for="(item,index) in list2" :key="index" style="border:0px;">
          <p :class="{spancon:item.con}" style="width:30px;height:30px;font-size:12px;line-height:30px;border-radius:50%;position:absolute;top:-220px;left:0">{{item.icon}}</p>
        </li>
      </draggable>
    </div>
    <div v-for="(item,index) in list" :key="index" style="background-color:#eee;">
      <input type="text" v-model="item.test" @focus="clickChange" :placeholder="item.name">
    </div>
    <el-input v-model="test" @change="change"></el-input>
    <!-- <nested-draggable :tasks="list" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import draggable from 'vuedraggable'
// import nestedDraggable from '../components/infra/nested'

export default {
  name: 'home',
  data () {
    return {
      move: false,
      con: true,
      test: 'ttttt',
      message: 'this is a home page',
      list: [
        {
          id: 1,
          name: 'a',
          icon: 'A'
        },
        {
          id: 2,
          name: 'b',
          icon: 'B'
        },
        {
          id: 3,
          name: 'c',
          icon: 'C'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        }
      ],
      list2: []
    }
  },
  components: {
    draggable
  // nestedDraggable
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log(to);
    console.log(from);
    // this.message = to.name;
    next(vm => {
      vm.message = to.name;
    });
  },
  created () {
    this.list2 = this.list
    for (let i = 0; i < this.list2.length - 1; i++) {
      let listLength = this.list2.length - 1
      this.list2[i].icon = ''
      this.list2[0].icon = 'B'
      this.list2[listLength - 2].icon = 'C'
      this.list2[listLength - 1].icon = 'D'
      this.list2[i].con = true;
      if (this.list2[i].icon === '') {
        this.list2[i].con = false;
      }
    }
    console.log(this.list)
  },
  mounted () {
    this.$nextTick(() => {
      let listheight = this.$refs.listIn.$el.offsetHeight;
      console.log(this.$refs.listIn.$el.offsetHeight);
      if (listheight > 300) {
        this.move = true;
      }
    })
    
    // this.$refs.listIn.style.overflow = 'auto'
  },
  methods: {
    dragstart (val) {
      console.log(val)
    },
    dragend (val) {
      console.log(val)
      if (val.oldIndex === 0) {
        val.newIndex = 0
      }
      if (val.oldDraggableIndex === 0) {
        val.newDraggableIndex = 0
      }
    },
    iconmouseover () {
      console.log('movestart')
    },
    iconmouseup () {
      console.log('movesend')
    },
    change (val) {
      console.log(val)
    },
    // show () {
    //   let a = 1;
    //   console.log(a)
    // }
    clickChange () {
      console.log(this.list);
    },
    allowDrop (ev) {
      ev.preventDefault();
    },
    drag (ev) {
      ev.dataTransfer.setData('Text', ev.target.id);
    },
    drop (ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData('Text');
      ev.target.appendChild(document.getElementById(data));
    }
  }
}
</script>

<style lang="scss" scoped>
.differ-icon .spancon{
      border:1px solid #f00;
    }
.ifMove{
  overflow-y: auto;
  overflow-x: hidden;
}
p{
  margin:0;
  padding:0;
}
ul,li{
  margin:0;
  padding:0;
}
.home::-webkit-scrollbar {
        display: none;
    }
 .home{
   width:600px;
   height:200px;
  //  overflow-y:scroll;
  //  overflow-x: hidden;
   position:relative;
   ul{
     width:600px;
     //overflow: hidden;
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
     span{
         display:block;
         width:20px;
         height:20px;
         border-radius:50%;
         border:1px solid #000;
         line-height: 20px;
         font-size:12px;
         cursor: pointer;
         position:absolute;
         right:0;
         top:0;
       }
  
 }
</style>
