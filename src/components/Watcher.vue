<template>
  <div>
    <el-row class="contain">
      
        <el-card :body-style="{ padding: '0px' }" v-for="(item,index) in content_list" :key="index" class="card">
          <el-image
            class="image"
            :src="item.pic"
            fit="cover"
            lazy>
          </el-image>
          
          <div style="padding: 14px;">
            <span>{{ item.title }}</span>
            <div class="bottom clearfix">
              <span class="author">{{ item.author }}</span>
              
              <span class="like"><i class="el-icon-star-off"></i>{{ item.like }}</span>
            </div>
          </div>
        </el-card>
     
  </el-row>
  </div>
</template>
<script>
import pic1 from '@/assets/imgs/content_list/01.jpg'
import pic2 from '@/assets/imgs/content_list/05.jpg'
import pic3 from '@/assets/imgs/content_list/02.jpg'
import pic4 from '@/assets/imgs/content_list/03.jpg'
import pic5 from '@/assets/imgs/content_list/04.jpg'
export default {
  name:'watcher',
  data() {
    return{
      content_list:[
        {
          author:'王俊凯',
          title:'猫猫太可爱了快来看啊啊啊啊啊啊',
          pic:pic1,
          time:'2020-07-03',
          like:200
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic2,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic3,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic2,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic2,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic2,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic3,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic4,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic5,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic4,
          time:'2020-07-02',
          like:160
        },
        {
          author:'王一博',
          title:'我来吸猫了！',
          pic:pic2,
          time:'2020-07-02',
          like:160
        }
      ]
    }
  },
  methods:{}
}
</script>
<style scoped>
  .bottom{
    margin-top: 13px;
    line-height: 12px;
  }
  .like{
    padding: 0;
    float: right;
  }
  .image{
    width:100%;
    display: block;
  }
  .author{
    font-size: 12px;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .contain{
    column-count:2;
  }
  .card{
    -moz-page-break-inside:avoid;
    -webkit-column-break-inside:avoid;
    break-inside:avoid;
    margin-bottom: 10px;
  }
</style>