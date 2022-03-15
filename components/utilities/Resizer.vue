<template>
  <div
    class="cont"
    @mousemove="paneMouseMoveHandler"
    @mouseup="paneMouseUpHandler"
    @mouseleave="paneMouseUpHandler"
    ref="cont"
    style="{max-width: 100px}"
  >
    <div class="pane" :style="stylesObj">
      <slot class="content"></slot>
      <div
        class="handle"
        ref="handle"
        @mousedown="handleMouseDownHandler"
      >
        <img src="../../assets/images/equal-sign.png">
      </div>
    </div>
  </div>
</template>
<script>

//CONSTRAINT, that the pane would always be the width of container that means it will take 100% of space initially.

export default {

    data () {
        return {
            mouseReferPoint : undefined, //Refers to the point where mouse was clicked down
            paneWidth : undefined, //The variable width of the pane that the user can resize
            stylesObj : { }, //The styles object to mainly control width of the pane
            resizeEndTimer : undefined, //Used to calculate the end of the resize event
        }
    },

  mounted() {
    const totalWidth = this.$refs.cont.clientWidth;
    this.paneWidth = totalWidth;
    this.stylesObj = { width : totalWidth + 'px'}; //this line seems unecessary, but is important because, for some unknow reason resizing doesn't happen without it
    window.addEventListener('resize', this.wResizeHandler);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.wResizeHandler);
  },

  watch : {
    paneWidth : function () {
      if(this.paneWidth != undefined){
        this.stylesObj.width = this.paneWidth + 'px';
      }
      console.log(this.stylesObj);
    }
  },

  methods: {

      handleMouseDownHandler : function (e) {
          this.mouseReferPoint = e.x;
      },

      paneMouseMoveHandler : function (e) {
          const maxWidth = this.$refs.cont.offsetWidth;
          const minWidth = 100;
          let moveRatio = undefined;

          if(this.mouseReferPoint != undefined ){
            //if e.x < mouseReferPoint then mouse is moving left otherwise right
            moveRatio = e.x - this.mouseReferPoint;
                if(this.paneWidth + moveRatio >= maxWidth){
                    this.paneWidth = maxWidth;  
                }else if(this.paneWidth + moveRatio <= minWidth){
                    this.paneWidth = minWidth;
                }else{
                    this.paneWidth += moveRatio;
                }

              //Reset Refer point to recent crossed point
              this.mouseReferPoint = e.x;
          }
      },

      paneMouseUpHandler : function (e) {
          this.mouseReferPoint = undefined;
      },

      wResizeHandler : function () {
        //clientWidth -> width without border, offsetWidth -> width with borders included

        const contWidth = this.$refs.cont?.clientWidth;
        if(contWidth != undefined){
          // +5 to still resize the pane if it's still in container's vicinity
          if((this.paneWidth+5) >= contWidth){
            this.stylesObj.width = '100%';
            if(this.resizeEndTimer != undefined) clearTimeout(this.resizeEndTimer);
            this.resizeEndTimer = setTimeout(this.wResizeEndHandler , 200);
          }; 
      }
    },

    wResizeEndHandler : function () {
      const contWidth = this.$refs.cont?.clientWidth;
      if(contWidth != undefined){
        this.paneWidth = contWidth;
      }
    }

  },

};
</script>

<style>
.cont {
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

.pane {
  height: 100%;
  width: 100%;
  max-width: 100%;
  position: relative;
}

.content {
  z-index: 0;
  width: 100%;
  height: 100%;
}

.handle {
  width: 30px;
  height: 100%;
  background: #dedede;
  cursor: col-resize;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  /*For Handling icon inside*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.handle img{
  width: 20px;
  height: 20px;
}
</style>
