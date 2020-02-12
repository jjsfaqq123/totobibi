<template>
  <div>
    <el-dialog
      title="温馨提示"
      :center="true"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>本页面有小江江独立开发，有任何问题可以上门咨询！ 谢谢</span>
      <pre>
            青山横北郭，白水绕东城。
            此地一为别，孤蓬万里征。
            浮云游子意，落日故人情。
            挥手自兹去，萧萧班马鸣。</pre>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
  </el-dialog>
</div>
</template>

<script>
import {  mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {
      dialogVisible:false
    }
  },
  computed: {
    ...mapState(["Alertstate"])
  },
  created() {
    this.shows()
  },
activated() {
    
  },
  methods:{
    ...mapMutations(["homeAlert"]),
    shows(){
      if(this.Alertstate === true) {
        this.dialogVisible =true
        this.homeAlert(false)
      }
    },
     handleClose(done) {
        this.$confirm()
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style>

</style>