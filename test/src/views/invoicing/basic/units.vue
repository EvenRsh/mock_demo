<template>
  <div>
    计量单位
    <my-button :buttons="buttons"></my-button>
    <!--弹窗-->
    <el-dialog
      size="tiny"
      :visible.sync="dialogVisible"
    >
      <!--<jldanwei  :jldanweiData="jldanweiOpt"></jldanwei>-->
      <my-button :buttons="buttons"></my-button>
      <!--tab-->
      <el-tabs v-model="activeName2" type="card">
        <el-tab-pane label="计量单位" name="first">
          <el-row>
            排序码:
            <el-input v-model="newNumber"></el-input>
          </el-row>
          <el-row>
            单位名称:
            <el-input v-model="newName"></el-input>
          </el-row>
        </el-tab-pane>

      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="jldanweiData.cancle">取 消</el-button>
        <el-button type="primary" @click="jldanweiData.edit">确 定</el-button>
      </span>
    </el-dialog>
    <!--表格-->
    <el-table
      ref="singleTable"
      :data="list"
      border fit highlight-current-row
      @current-change="handleCurrentChange"
      @row-dblclick="selectRow"
    >
      <el-table-column v-for="item in thead" align="center" :label="item.label" width="120px">
        <template scope="scope">
          <span>{{scope.row[item.type]}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="">
  import jldanwei from "@/components/jldanwei"
  import api from '@/config/fetch.js'
  import { mapGetters , mapActions } from 'vuex'

  export default {
    name: '',
    data() {
      return {
        //新增数据保存
        newName: "",
        newNumber: "",
        //tab切换索引
        activeName2: "first",
        //每行数据保存
        currentRow: null,
        //是否显示弹窗
        dialogVisible: false,
        //对话框的数据
        jldanweiData: {
          cancle: this.cancle,
          edit: this.edit,
          listData: {}
        },
        //table数据
        thead: [],
        list: [],
        //导航按钮数据
        buttons: [
          {
            name: "新增",
            cb: () => {
              this.setCurrent()
              this.dialogVisible = true;
              this.currentRow = "";
              this.newName = "";
              this.newNumber = ""
            }
          }, {
            name: "修改",
            cb: () => {

              if (this.currentRow) {
                this.dialogVisible = true;
                this.newName = this.currentRow.name
                this.newNumber = this.currentRow.number
              }
              else {
                alert("请选择你需要修改的数据")
              }

            }
          }
        ],

      };
    },
    components: {
      jldanwei
    },
    computed: {
      ...mapGetters([
        "unitList"
      ])
    },
    methods: {
      ...mapActions([
        "setList"
      ]),

      //关闭弹窗
      cancle() {
        this.dialogVisible = false;

      },
      //弹窗保存新数据或者修改原数据保存
      edit() {
        if (!this.currentRow) {//新增
          let obj = {};
          obj.id = this.list.length;
          obj.number = this.newNumber;
          obj.name = this.newName;
          this.list.push(obj);
          this.addList(obj)
          //重置数据
          this.newNumber = "";
          this.newName = "";
          this.currentRow = ""
        } else {//修改
          this.list[this.currentRow.id].name = this.newName;
          this.list[this.currentRow.id].number = this.newNumber;
          this.newNumber = "";
          this.newName = "";
        }
        this.cancle();
      },
      //选择行数据
      selectRow() {
        if (this.currentRow) {
          this.dialogVisible = true;
//          this.jldanweiData.listData = this.currentRow
          this.newName = this.currentRow.name
          this.newNumber = this.currentRow.number
        }
      },
      //设置行数据
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      //改变行保存改行数据
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      //addList 新增列表数据
      addList: (obj) => {
        api.getData('/api/pushData', JSON.stringify(obj)).then(
          res => {
          });
      }
    },
    mounted() {
//          console.log(this.list)

    },
    created() {
      if(!this.unitList.length>0){
        api.getData('/api/jldwData').then(
          res => {
            this.list = res.list;
            this.thead = res.thead;
            this.setList(res.list)
          });
      }
      else{

      }
      console.log(this.list)

    }
  }
</script>

<style lang="">

</style>
