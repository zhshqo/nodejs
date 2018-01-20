<template>
  <div class="table">
    <div class="handle-box">
        <el-button type="danger" icon="delete" class="mr10" @click="delAll">批量删除</el-button>
        <el-date-picker v-model="select_time" type="datetime" placeholder="选择日期时间" class="mr10"></el-date-picker>
        <el-button type="primary" icon="search" @click="search">服务端搜索</el-button>
        <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
    </div>
    <el-table :data="tableDataFiltered">
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "personInfo",
  data() {
    return {
      tableData: [],
      select_time: '',
      select_word: '',
      tableDataUrl: './static/appdata.json'
    };
  },
  created(){
      this.initTableData();
  },
  computed: {//只要相关变量变化，则会实时计算
      tableDataFiltered(){
          const self = this;
          //先重新获取一次数据，然后在此基础上筛选
          return self.tableData.filter(function(row){
            console.log("行："+row);
              if(row.name.indexOf(self.select_word) > -1 ||row.address.indexOf(self.select_word) > -1){
                  return row;
              }
          })
      }
  },
  methods: {
    initTableData(){
        let self = this;
        if(process.env.NODE_ENV === 'production'){
          //生产环境，调用远程接口，否则调用本地json
          self.tableDataUrl = '/ms/table/list';
        };
        self.$axios.get(self.tableDataUrl,{}).then((res) => {
            self.tableData = res.data.list;
        })
    },
    search(){
    },
    delAll(){

    },
    handleEdit(index, row) {
        this.$message('编辑第'+(index+1)+'行');
    },
    handleDelete(index, row) {
        this.$message.error('删除第'+(index+1)+'行');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .handle-box{
      margin-top: 10px;
      margin-bottom: 10px;
  }
  .handle-input{
      width: 300px;
      display: inline-block;
  }
</style>
