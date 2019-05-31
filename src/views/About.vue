<template>
  <div class="about">
    <div class="more-select-col">
      <p class="select-list-in">
        <span class="select-checked-con">{{listdate}}<i class="select-list-close">close</i></span>
        <span class="select-checked-con">{{listdate}}<i class="select-list-close">close</i></span>
        <span class="select-checked-con">{{listdate}}<i class="select-list-close">close</i></span>
        <span class="select-down" @click="handlerSelectDown"></span>
      </p>
      <div class="search-more-check" v-if="dateDetailShow">
        <input type="text" class="select-search">
        <ul>
          <li>
            <p @click="handlerClickCheck"><i :class="{'content-checked':checked}"></i><span>{{label}}</span></p>
          </li>
          <li>
            <p @click="handlerClickCheck"><i :class="{'content-checked':checked}"></i><span>{{label}}</span></p>
          </li>
          <li>
            <p @click="handlerClickCheck"><i :class="{'content-checked':checked}"></i><span>{{label}}</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      listdate: '肝胆',
      label: '肺',
      checked: false,
      dateDetailShow: false
    }
  },
  created () {
    this.$store.commit('increase')
    console.log(this.$store.state.count);
  },
  methods: {
    handlerClickCheck () {
      this.checked = !this.checked;
      console.log(this.checked);
    },
    handlerSelectDown () {
      this.dateDetailShow = !this.dateDetailShow;
    }
  }
}
</script>

<style lang="scss" scoped>
ul,li,p{
  padding:0;
  margin:0;
  list-style: none;
}
.more-select-col{
  position:relative;
  .select-list-in{
    position: relative;
    width:260px;
    height:24px;
    border: 1px solid #C2C9DF;
    border-radius: 2px;
    text-align: left;
    .select-checked-con{
      display:inline-block;
      background: #F3F3F3;
      border-radius: 4px;
      width: auto;
      padding:3px 10px;
      font-size:12px;
    }
    .select-list-close{
     margin-left:4px;
      display:inline-block;
      width:12px;
      height:12px;
      color:transparent;
      border-radius:50%;
      background-color:rgba(0,0,0,0.45);
      background-image:url(../assets/icon-close.png);
      background-repeat: no-repeat;
      background-position:center center;
    }
    .select-down{
      background: #F3F3F3;
      width: 18px;
      height: 22px;
      position:absolute;
      top:1px;
      right:1px;
      background-image: url(../assets/icon-drop-down.png);
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
  .search-more-check{
    width:470px;
    height:176px;
    border:1px solid #eee;
    ul{
      padding:10px;
      li{
        width:30%;
        padding:4px;
        text-align:left;
        list-style: none;
        float:left;
        p{
          display:flex;
          flex-direction: row;
          justify-content: flex-start;
        }
        span{
          display:inline-block;
          line-height: 16px;
          padding-left:10px;
        }
        i{
          display:inline-block;
          width: 16px;
          height:16px;
          border: 2px solid #C0CBE9;
          box-sizing:border-box;
        }
        .content-checked{
          background-image: url(../assets/icon-checked.png);
          border:0;
        }
      }
    }
  }
}
.search-more-check{
  width:471px;
  height: 174px;
  .select-search{
    width: 100%;
    line-height: 24px;
    background-image:url(../assets/icon-search.png);
    background-repeat: no-repeat;
    background-position:10px center;
    box-sizing:border-box;
    border:1px solid #eee;
    padding-left:36px;
    box-sizing: border-box;
  }
  
}
</style>
