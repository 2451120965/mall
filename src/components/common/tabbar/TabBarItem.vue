<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        
        <!-- :class="{active: isActive}" 这里就不动态绑定死red  
            通过props传入的值来决定
         -->
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'tabBarItem',
    props: {
        link: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
            // isActive: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.link) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            // console.log("click");
            // console.log(this.$router);
            this.$router.replace(this.link)
        }
    }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;

  height: 49px; 
  font-size: 14px;
}

.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}

/* 
    封装动态 颜色控制
    在props里接收 用户需要修改成的颜色
    然后用计算属性 判断赋值 动态绑定属性值  以此来实现自定义属性值
*/
/* .active {
    color: red;
} */

</style>