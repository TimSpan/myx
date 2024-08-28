
# Notes

文字不可复制

```css
<style scoped type="text/css">
* {
    -webkit-user-select: none;
    user-select: none;
}

p {
    font-family: 'Microsoft Yahei';
    font-size: 28px;
}

input {
    width: 80%;
    padding: 10px 20px;
}
```

```
 		oncut="return false" 
        onpaste="return false" 
        oncopy="return false"
```

## append-to-body

```
当两个元素都有 append-to-body 时，设置优先显示哪个元素，需要都给两个元素设置 z-index


```

饿了么表格

```js
scope.$index 可以传递下标
```

## element-plus里的el-table获取表格数据索引下标



```html
<template>
    <div style="height: 100%;position: relative;">
        <div style="display: flex;">
            <myTitle :title="title" />
            <span class="addRoleButton" @click="routerPush">添加角色</span>
        </div>
        <div style="width: 1000;">
            <el-table :data="tableData.list" stripe style="width: 100%">
                <el-table-column prop="role_name" label="角色名称" min-width="20%" />
                <el-table-column prop="dept_name" label="类型" min-width="20%" />
                <el-table-column prop="number" label="人员数量" min-width="20%" />
                <el-table-column fixed="right" label="操作" min-width="40%" type="index">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click="handleClick">编辑</el-button>
                        <el-button link type="primary" size="small">折扣</el-button>
                        <el-button link type="primary" size="small" @click="openDetails(tableData.list[scope.$index].id)">详情</el-button>
                        <el-button link type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <viewDetails :visibleState="visible" @close="close" />
        <el-pagination background layout="prev, pager, next" :total="total" style="position: absolute; bottom: 50px;" />
    </div>
</template>
```

## vue-router4编程式导航使用注意

跳转

```js
    router.push({
        path: '/discountSettings',
        query: { id: id },
    })
```

接收参数

```js
const route = useRoute()
console.log(route.query.id)
```

> 如果提供了 `path`，`params` 会被忽略
>
> `params` 不能与 `path` 一起使用



## vue3 watch使用

```js
watch(
    () => discountData.agent,
    (newValue, oldValue) => {
        console.log(newValue, oldValue)
    },
    { deep: true, immediate: true }
)
```

```js
watch(
    () => discountData.agent,
    (newValue, oldValue) => {
        console.log('代理费新值', newValue)
        newData.agent = newValue
    },
    { deep: true, immediate: true }
)
watch(
    () => discountData.hard_ware,
    (newValue, oldValue) => {
        console.log('硬件新值', newValue)
        newData.hard_ware = newValue
    },
    { deep: true, immediate: true }
)
watch(
    () => discountData.soft_ware,
    (newValue, oldValue) => {
        console.log('软件新值', newValue)
        newData.soft_ware = newValue
    },
    { deep: true, immediate: true }
)
// watch(
//     () => [discountData.agent, discountData.hard_ware, discountData.soft_ware],
//     ([agent_new, agent_old], [hardware_new, hardware_old], [software_new, software_old]) => {
//         console.log('代理费新值', agent_new)
//         console.log('硬件新值', hardware_new)
//         console.log('软件新值', software_new)
//     },
//     { deep: true, immediate: true }
// )
```

## git回退上一个版本

```bash
git reset --hard HEAD^
```

## git回退到指定版本

```bash
 git reset --hard 指定版本号
```

## echarts 和 u-charts

```
orient : 确定方位
horizontal : 水平的
circle : 圆形
```

```
:eopts="{
                        legend: {
                            orient: 'vertical',
                            top: 'center',
                            right: 0,
                            icon: 'circle',
                        },
                        tooltip: {
                            show: true,
                        },
                    }"
```

```
:opts="{
                        legend: {
                            show: false,
                        },
                        extra: {
                            tooltip: {
                                showBox: false,
                            },
                            markline: {
                                type: solid,
                            },
                        },
                    }"
```



```js
option = {
  formatter: function (name) {
    return name + '30%';
  },
  title:{
    text:'卡类型占比'
  },
  tooltip: {
    trigger: 'item',
    formatter:'{b}:{c}%'
  },
  series: [
    {
      name: ['金卡占比','银卡占比','铜卡占比','黑卡占比'],
      type: 'pie',
      radius: ['30%', '40%'],
      avoidLabelOverlap: false,
      label: {
        normal:{
          show:true
        },
        show: true,
        position: 'center'
      },
    labelLine: {
          normal: {
            show: true
        }
    },
      data: [
        { value: 30, name: '金卡占比' },
        { value: 30, name: '银卡占比' },
        { value: 20, name: '铜卡占比' },
        { value: 20, name: '黑卡占比' }
      ]
    }
  ]
};
```

```
:chartData="iconList"
:tooltipShow="false"
```



## vue3------watch监听多个数据

```js
    const state = reactive({
      province: '',// 省份
      country: '', // 城市
      detailedAdress: '', // 详细地址
      countries: [], // 城市列表
      allCity: [], // 所有省份及城市数据
    });
    // 写两个watch太麻烦，现用watch监听省份和城市两个数据
    // 第一个参数() => [state.province, state.country] 监听的两个数据
    // 第二个参数回调函数，其中参数分别代表更改后与更改前的值，([newprovince,newcountry],[oldprovince,oldcountry]) ，第一个参数依次代表更改后的值，第二个参数依次代表更改前的值
      watch(() => [state.province, state.country], ([newprovince,newcountry],[oldprovince,oldcountry]) => {
        console.log(oldprovince,'省份---', newprovince);
        console.log(newcountry,'cs---', oldcountry);
        // 判断是不是省份发生的变化
        if(oldprovince !== newprovince) {
        const arr = state.allCity.filter((item) => item.province == state.province);
        state.countries = arr[0].cities;
        console.log(arr);
        state.country = "";
        }
        state.detailedAdress = "";
        console.log(state.countries);
      }
    ); 


```





## 快速清除对象属性的键值

```js
const ruleForm = reactive({
    sort: '', //序号
    name: '', // 名称
    cost_price: '', // 成本价
    seller_price: '', // 销售价
    stock_num: '', //库存数量
    type: 2, //这是硬件
})
function add_hardware() {
    Object.keys(ruleForm).forEach(key => (ruleForm[key] = '')) //快速清除对象属性的键值
    
}
```




## 饿了么表单自定义校验

> 自定义验证表单时，切记不管什么情况都要执行callback函数！！！

```js
const validateRegion = (rule, value, callback) => {
    console.log(value)
    if (value === '') {
        callback(new Error('请选择角色'))
    } else {
        // 自定义验证表单时，切记不管什么情况都要执行callback函数！！！
        callback()
    }
}
const validateRemark = (rule, value, callback) => {
    if (ruleForm.remark.length >= 100) {
        callback(new Error('备注长度不能超过100'))
    } else {
        // 自定义验证表单时，切记不管什么情况都要执行callback函数！！！
        callback()
    }
}
```

## 饿了么动态表单

数据格式

> 注意点：
>
> 需要注意给prop绑定时的名称要保持一致（一级属性+索引+二级属性名称 **:prop="'soft_ware.' + index + '.price'"**）

```html
<el-form-item
    label-width="250px"
    v-for="(item, index) in ruleForm.soft_ware"
    :key="index"
    :label="item.ware_name + '原价:' + item.discount_price + '元'"
    :prop="'soft_ware.' + index + '.price'"
    :rules="RMB_Rules"
>
    折后
    <el-input class="input_witdh" v-model="item.price" />
    元
</el-form-item>
```

```js
const RMB_Rules = [{ required: true, trigger: ['change', 'blur'], validator: validate_three, message: '元输入框不能超过7位数' }]

```

## 关于ucharts

问题：图表显示了，但是点击图表无效/点击图例无效

原因：大概率父元素中有定位元素，去掉不必要的 position:relative

解决：检查父元素中有postion:relative,去掉。

```vue
<view ref="main" class="ec_1 ec_common_h ec_common ec_bottom">
			<qiun-data-charts tooltipShow="true" animation=true class="ec_ucharts" :opts="opts" type="ring"
				:chartData="chartData" />
		</view>
```



```css
.ec_1 {
	height: 500rpx;
	/* position: relative; */
}

.ec_ucharts {
	/* position: relative; */
}
```

## 地图绝不能用 `Vue` 的响应式数据

## ucharts 父元素 绝对不能有定位

```
当tooltipShow 不显示时，99%是因为父元素有定位
```

## uView2 表单校验

```html
<template>
	<view class="container">
		<view class="title">学生基本信息:</view>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form labelAlign="right" labelPosition="left" :model="userInfo" :rules="rules" ref="form1">
			<!-- 学生姓名 -->
			<u-form-item label="学生姓名：" prop="name" borderBottom labelWidth="90">
				<u--input v-model="userInfo.name" border="none"></u--input>
			</u-form-item>

			<!-- 性别 -->
			<u-form-item label="性别：" prop="gender" borderBottom @click="hideKeyboard()" labelWidth="90">
				<div style="width: 100%;">
					<picker @change="bindGenderChange" :range="genderList" range-key="value">
						<view class="flex_">
							<!-- {{ userInfo.gender === null ? '请选择性别' :
								genderList[userInfo.gender - 1].value }} -->
							{{ genderList[userInfo.gender - 1].value }}
							<uni-icons style="margin-right: 20px;" type="right" size="20"></uni-icons>
						</view>
					</picker>
				</div>
			</u-form-item>

			<!-- 身份证 -->
			<u-form-item label="身份证：" prop="IDcard" borderBottom labelWidth="90">
				<u--input maxlength="18" v-model="userInfo.IDcard" border="none" placeholder="输入身份证号可自动填写年龄"></u--input>
			</u-form-item>
			<!-- 年龄 -->
			<u-form-item label="年龄：" prop="age" borderBottom labelWidth="90">
				<u--input maxlength="3" v-model="userInfo.age" border="none"></u--input>
			</u-form-item>

			<view class="regionFlex">
				<!-- 一级 city_stu -->
				<u-form-item @click="hideKeyboard()" prop="city_stu" borderBottom>
					<picker mode="selector" @change="change_1" :range="region1" range-key="CRI_NAME">
						<u--input class="u--input" v-model="userInfo.city_stu" border="none" placeholder="市"></u--input>
					</picker>
				</u-form-item>
				<!-- 二级 county_stu-->
				<u-form-item @click="hideKeyboard()" prop="county_stu" borderBottom>
					<picker mode="selector" @change="change_2" :range="region2" range-key="CRI_NAME">
						<u--input class="u--input" v-model="userInfo.county_stu" border="none" placeholder="县"></u--input>
					</picker>
				</u-form-item>
				<!-- 三级 town_stu-->
				<u-form-item @click="hideKeyboard()" prop="town_stu" borderBottom>
					<picker mode="selector" @change="change_3" :range="region3" range-key="CRI_NAME">
						<u--input class="u--input" v-model="userInfo.town_stu" border="none" placeholder="乡镇"></u--input>
					</picker>
				</u-form-item>
				<!-- 四级 village_stu-->
				<u-form-item @click="hideKeyboard()" prop="village_stu" borderBottom>
					<picker mode="selector" @change="change_4" :range="region4" range-key="CRI_NAME">
						<u--input class="u--input" v-model="userInfo.village_stu" border="none" placeholder="村"></u--input>
					</picker>
				</u-form-item>
			</view>


			<!-- 详细地址 -->
			<u-form-item label="详细地址：" prop="address" borderBottom labelWidth="90">
				<u--input v-model="userInfo.address" border="none" placeholder="请输入详细地址信息"></u--input>
			</u-form-item>

			<u-form-item label="电话：" prop="phone" borderBottom labelWidth="90">
				<u--input maxlength="11" v-model="userInfo.phone" border="none"></u--input>
			</u-form-item>

			<!-- 贫困类别 -->
			<u-form-item label="贫困类别：" prop="pool_type_stu" borderBottom labelWidth="90">
				<div style="width: 100%;">
					<picker @change="bindPoolChange" :range="poolList" range-key="value">
						<view class="flex_">
							{{ userInfo.pool_type_stu === null ? '请选择贫困类别' :
								poolList[userInfo.pool_type_stu - 1].value }}
							<uni-icons style="margin-right: 20px;" type="right" size="20"></uni-icons>
						</view>
					</picker>
				</div>
			</u-form-item>

			<!-- 家庭收入情况 -->
			<u-form-item label="家庭收入：" prop="family_income_stu" borderBottom labelWidth="90">
				<u--textarea v-model="userInfo.family_income_stu" border="none"
					placeholder="详细填写家庭所有成员收入情况，按成员分别进行填写"></u--textarea>
			</u-form-item>


			<!-- 就读学校 -->
			<u-form-item label="就读学校：" prop="attending_school_stu" borderBottom labelWidth="90">
				<u--input v-model="userInfo.attending_school_stu" border="none" placeholder="就读（或录取）学校公（民）办"></u--input>
			</u-form-item>

			<view class="line"></view>
			<view class="title">学生家庭成员信息:</view>

			<!-- 添加家庭成员 -->
			<view class="addMemberBox">
				<view class="addMember commonStyle" @click="addMember">添加成员</view>
			</view>

			<!-- 家庭成员列表 -->
			<view v-for="(member, index) in userInfo.familyMember" :key="member">
				<view class="familyMemberBox">
					<view @click="changeMember(index)" class="familyMember">{{ getMemberString(member) }}</view>
					<view class="familyMemberChangeButton_" @click="changeMember(index)">修改</view>
					<view class="familyMemberChangeButton" @click="deleteMember(index)">删除</view>
				</view>
			</view>

			<!-- 银行户名 -->
			<u-form-item label="银行户名：" prop="bank_name" borderBottom labelWidth="90">
				<u--input v-model="userInfo.bank_name" border="none"></u--input>
			</u-form-item>
			<!-- 银行账号 -->
			<u-form-item label="银行账号：" prop="bank_number" borderBottom labelWidth="90">
				<u--input v-model="userInfo.bank_number" border="none"></u--input>
			</u-form-item>
			<!-- 开户银行 -->
			<u-form-item label="开户银行：" prop="open_bank" borderBottom labelWidth="90">
				<u--input v-model="userInfo.open_bank" border="none"></u--input>
			</u-form-item>

			<!-- 上传学生近照 -->
			<u-form-item prop="recent_photograph" borderBottom>
				<view class="box_2">
					<view class="text_2">1、请上传学生近照</view>
					<view class="images_box">
						<template>
							<view v-for="(item, index) in userInfo.recent_photograph" class="image_item" :key="index"
								@click="onPreviewImage(userInfo.recent_photograph, item)">
								<img :src="item" class="img_2" mode="aspectFill" />
								<img src="@/static/icon-del.png" class="img_3" @click.stop="onRemoveImage('recent_photograph', index)" />
							</view>
						</template>
						<!-- v-if="userInfo.recent_photograph === null || userInfo.recent_photograph.length === 0" -->
						<view class="image_item" @click="onImagesUpload('recent_photograph')"><img src="../../static/img_plus.png"
								class="img_2" />
						</view>
					</view>
				</view>
			</u-form-item>
			<!-- 1、上传学生住房照片 -->
			<u-form-item prop="housing_photos_stu" borderBottom>
				<view class="box_2">
					<view class="text_2">2、上传学生住房照片</view>
					<view class="text_Tip">说明:至少提供整栋房屋、厅堂(客厅)厨房等照片</view>
					<view class="images_box">
						<view v-for="(item, index) in userInfo.housing_photos_stu" class="image_item" :key="index"
							@click="onPreviewImage(userInfo.housing_photos_stu, item)">
							<img :src="item" class="img_2" mode="aspectFill" />
							<img src="@/static/icon-del.png" class="img_3" @click.stop="onRemoveImage('housing_photos_stu', index)" />
						</view>
						<view class="image_item" @click="onImagesUpload('housing_photos_stu')"><img src="../../static/img_plus.png"
								class="img_2" />
						</view>
					</view>
				</view>
			</u-form-item>

			<!-- 2、上传身份证正反面 -->
			<u-form-item prop="IDcard_front_back_photos" borderBottom>
				<view class="box_2">
					<view class="text_2">3、上传身份证正反面</view>
					<view class="images_box">
						<template>
							<view v-for="(item, index) in userInfo.IDcard_front_back_photos" class="image_item" :key="index"
								@click="onPreviewImage(userInfo.IDcard_front_back_photos, item)">
								<img :src="item" class="img_2" mode="aspectFill" />
								<img src="@/static/icon-del.png" class="img_3"
									@click.stop="onRemoveImage('IDcard_front_back_photos', index)" />
							</view>
						</template>
						<view class="image_item" @click="onImagesUpload('IDcard_front_back_photos')"><img
								src="../../static/img_plus.png" class="img_2" />
						</view>
					</view>
				</view>
			</u-form-item>


			<!-- 5、上传学生家庭成员户口本照 -->
			<u-form-item prop="household_registration_book_photo_stu" borderBottom>
				<view class="box_2">
					<view class="text_3">4、上传学生家庭成员户口本照</view>
					<view class="text_Tip">说明: 请上传户口本户主页及户口成员页</view>
					<view class="images_box">
						<template>
							<view v-for="(item, index) in userInfo.household_registration_book_photo_stu" class="image_item"
								:key="index" @click="onPreviewImage(userInfo.household_registration_book_photo_stu, item)">
								<img :src="item" class="img_2" mode="aspectFill" />
								<img src="@/static/icon-del.png" class="img_3"
									@click.stop="onRemoveImage('household_registration_book_photo_stu', index)" />
							</view>
						</template>
						<view class="image_item" @click="onImagesUpload('household_registration_book_photo_stu')"><img
								src="../../static/img_plus.png" class="img_2" />
						</view>
					</view>
				</view>
			</u-form-item>

			<!-- 6、上传学生其它证明材料照片 -->
			<u-form-item borderBottom>
				<view class="box_2">
					<view class="text_3">5、上传学生其它证明材料照片</view>
					<view class="text_Tip">说明:其它证明材料均可在此上传，如贫困证明等</view>
					<view class="images_box">
						<template>
							<view v-for="(item, index) in userInfo.other_proof_photos" class="image_item" :key="index"
								@click="onPreviewImage(userInfo.other_proof_photos, item)">
								<img :src="item" class="img_2" mode="aspectFill" />
								<img src="@/static/icon-del.png" class="img_3" @click.stop="onRemoveImage('other_proof_photos', index)" />
							</view>
						</template>
						<view class="image_item" @click="onImagesUpload('other_proof_photos')"><img src="../../static/img_plus.png"
								class="img_2" />
						</view>
					</view>
				</view>
			</u-form-item>

			<!-- 7、上传其他证明材料(支持xls、doc、pdf、ppt、zip) -->
			<u-form-item borderBottom>
				<view class="box_2">
					<view class="text_3 text_upload">6、上传其他证明材料(支持所有格式的文件类型)</view>
					<uview-upload @getFile="getFile"></uview-upload>
				</view>
			</u-form-item>
		</u--form>
		<!-- 提交表单 -->
		<view style="height: 30px;"></view>
		<view class="submit_button">
			<view class="submit_button_confirm" @click="submit">提交审核</view>
			<view @click="clearValidate_" class="submit_button_save">保存草稿</view>
		</view>
		<view style="height: 30px;"></view>
	</view>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import { getRegion, getAllDropDownList, userApplyArticle, articleRecordDetail } from '@/config/api.js';
import { previewImage } from '../../utils/utils';
import { uploadFiles, uploadFile } from '../../config/upload';

export default {

	data() {
		const mobile = (rule, value, callback) => {
			/^1[3-9]\d{9}$/.test(value) ? callback() : callback(new Error('请输入正确的手机号码'))
		}
		const studentName_ = (rule, value, callback) => {
			const reg = /^[\u4e00-\u9fa5]+$/
			reg.test(value) ? callback() : callback(new Error('学生姓名只能输入汉字'))
		}
		const images_ = (rule, value, callback) => {
			value?.length != 0 ? callback() : callback(new Error('请上传学生近照'))
		}

		const address_ = (rule, value, callback) => {
			value?.length >= 3 ? callback() : callback(new Error('你输入的地址不够详细，至少3个字'))
		}
		const IDcard_ = (rule, value, callback) => {
			const reg = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
			if (reg.test(value)) {
				callback()
				this.userInfo.age = this.calculateAge(value)
			} else {
				callback(new Error('身份证号码输入不正确'))
			}
		}

		return {
			check_member_show: false,
			region1: [],
			region2: [],
			region3: [],
			region4: [],
			u_popup_show: false,
			relationshipList: ['父亲', '母亲', '叔叔', '阿姨', '兄弟', '姐妹'],
			identitList: [],    //政治面貌
			memberRules: {

				relationship: [
					{
						type: 'string',
						required: true,
						message: '请选择与本人关系',
						trigger: ['blur', 'change']
					},
				],
				name: [
					{
						type: 'string',
						required: true,
						message: '姓名输入不能为空',
						trigger: ['blur', 'change']
					},
				],
				health_condition: [
					{
						type: 'string',
						required: true,
						message: '输入不能为空',
						trigger: ['blur', 'change']
					},
				],
				employment_situation: [
					{
						type: 'string',
						required: true,
						message: '输入不能为空',
						trigger: ['blur', 'change']
					},
				],
				annual_income: [
					{
						type: 'string',
						required: true,
						message: '输入不能为空',
						trigger: ['blur', 'change']
					},
				],
				IDcard: [
					{
						type: 'number',
						max: 18,
						min: 18,
						required: true,
						message: '请输入正确的身份证号',
						trigger: ['blur', 'change']
					},
					{
						validator: IDcard_,
						message: '身份证号输入不正确',
						trigger: ['change', 'blur'],
					}

				],
				age: [
					{
						// type: 'string',
						required: true,
						message: '请输入你的年龄',
						trigger: ['blur', 'change']
					},
				],
			},
			// 保持数据返回对象字段一致性
			userInfo: {
				status: null,
				id: '',
				name: '',//学生姓名
				phone: '',			//手机号
				gender: 1,
				age: '',				//年龄
				IDcard: '',    // 身份证
				city_stu: '',
				county_stu: '',
				town_stu: '',
				village_stu: '',
				address: '',         //详细地址
				pool_type_stu: null,        //贫困类型           //int
				family_income_stu: '',    //家庭收入情况
				bank_name: '',        //银行户名
				bank_number: '',				//银行账号
				open_bank: '',					//开户银行
				recent_photograph: [],  											//学生近照
				IDcard_front_back_photos: [],  //学生身份证正反面
				housing_photos_stu: [], 				//学生住房照片
				household_registration_book_photo_stu: [],					//学生家庭户口本照片
				other_proof_photos: [],				//学生其他证明照片
				other_supporting_materials: [],												//其他证明材料
				familyMember: [],                  //学生家庭成员信息

			},

			genderIndex: 0,
			genderList: [],
			poolList: [],   //贫困类别

			actions: [
				{
					name: '男',
				},
				{
					name: '女',
				},
			],
			rules: {
				phone: [
					{
						type: 'number',
						max: 11,
						min: 11,
						required: true,
						message: '请输入正确手机号',
						trigger: ['blur', 'change']
					},
					{
						// 自定义验证函数，见上说明
						validator: mobile,
						message: '手机号码不正确',
						// 触发器可以同时用blur和change
						trigger: ['change', 'blur'],
					}

				],
				age: [
					{
						// type: 'string',
						required: true,
						message: '请输入你的年龄',
						trigger: ['blur', 'change']
					},
				],
				name: [
					{
						type: 'string',
						max: 11,
						min: 1,
						required: true,
						message: '学生姓名输入不能为空',
						trigger: ['blur', 'change']
					},
					{
						validator: studentName_,
						message: '学生姓名只能输入汉字',
						trigger: ['change', 'blur'],
					}

				],
				recent_photograph: [
					{
						type: 'array',
						required: true,
						message: '请上传学生近照',
						trigger: ['change', 'blur'],
					},
					{
						validator: images_,
						message: '请上传学生近照',
						trigger: ['change', 'blur'],
					}

				],

				address: [
					{
						type: 'string',
						max: 50,
						min: 2,
						required: true,
						message: '请输入详细地址信息',
						trigger: ['blur', 'change']
					},
					{
						validator: address_,
						message: '你输入的地址不够详细，至少3个字',
						trigger: ['change', 'blur'],
					}

				],

				city_stu: {
					type: 'string',
					required: true,
					message: '请选择市',
					trigger: ['change']
				},
				county_stu: {
					type: 'string',
					required: true,
					message: '请选择县',
					trigger: ['change']
				},
				town_stu: {
					type: 'string',
					required: true,
					message: '请选择镇',
					trigger: ['change']
				},
				village_stu: {
					type: 'string',
					required: true,
					message: '请选择村',
					trigger: ['change']
				},

				family_income_stu: {
					type: 'string',
					max: 300,
					min: 1,
					required: true,
					message: '请输入家庭收入情况',
					trigger: ['blur', 'change']
				},
				attending_school_stu: {
					type: 'string',
					max: 30,
					min: 1,
					required: true,
					message: '请输入就读学校',
					trigger: ['blur', 'change']
				},

				IDcard: [
					{
						type: 'number',
						max: 18,
						min: 18,
						required: true,
						message: '请输入正确的身份证号',
						trigger: ['blur', 'change']
					},
					{
						validator: IDcard_,
						message: '身份证号输入不正确',
						trigger: ['change', 'blur'],
					}

				],
				bank_number: [
					{
						type: 'number',
						max: 19,
						min: 1,
						required: true,
						message: '请输入银行卡号',
						trigger: ['blur', 'change']
					},
				],
				bank_name: {
					type: 'string',
					max: 30,
					min: 1,
					required: true,
					message: '请输入银行户名',
					trigger: ['blur', 'change']
				},
				open_bank: {
					type: 'string',
					max: 30,
					min: 1,
					required: true,
					message: '请输入开户银行',
					trigger: ['blur', 'change']
				},
				IDcard_front_back_photos: {
					type: 'array',
					required: true,
					message: '请上传身份证（正）面照片',
					trigger: ['blur', 'change']
				},

				housing_photos_stu: [

					{
						type: 'array',
						required: true,
						message: '请上传住房照片',
						trigger: ['blur', 'change']
					}

				],
				household_registration_book_photo_stu: [
					{
						type: 'array',
						required: true,
						message: '你还没有上传家庭户口本照片',
						trigger: ['blur', 'change']
					},
				],
			},
			windowHeight: 0, //可使用窗口高度
			safeAreaInsetsBottom: 0,


		};
	},

	async onLoad(e) {
		let _this = this
		console.log('文章id', e);
		this.userInfo.id = e.article_id
		var article_record_id = e.article_record_id

		console.log('article_record_id', article_record_id);
		const result = await getRegion({ CRI_SUPERIOR_CODE: '000000' })
		console.log('一级地址', result);
		this.region1 = result

		const obj = await getAllDropDownList({})
		console.log('下拉选项', obj);
		this.poolList = obj.pool_type_stu
		this.genderList = obj.gender
		this.identitList = obj.political_outlook_tec
		let res_ = await articleRecordDetail({ article_record_id: article_record_id })
		console.log("是否中断");
		console.log('保存的的form表单', res_);
		if (res_.code === 1) {
			let form_ = res_.article_record
			// @JSON深拷贝不能改变userInfo对象里面的数组以及对象数据，@使用$set太麻烦需要一个一个更改，@使用cloneDeep
			this.userInfo = _.cloneDeep(form_)
			console.log('this.userInfo', this.userInfo);
		}

		console.log("执行顺序");
		// 没办法，只能这么写
		if (this.userInfo.city_stu !== '' && this.userInfo.county_stu !== '' && this.userInfo.town_stu !== '') {
			this.region1.forEach(region_1 => {
				console.log('region_1', region_1);
				if (region_1.CRI_NAME == this.userInfo.city_stu) {
					getRegion({ CRI_SUPERIOR_CODE: region_1.CRI_CODE }).then(res_1 => {
						console.log('二级地址', res_1);
						this.region2 = res_1  //赋值二级
						this.region2.forEach(region_2 => {
							if (region_2.CRI_NAME == this.userInfo.county_stu) {
								getRegion({ CRI_SUPERIOR_CODE: region_2.CRI_CODE }).then(res_2 => {
									console.log('三级地址', res_2);
									this.region3 = res_2  //赋值三级
									this.region3.forEach(region_3 => {
										if (region_3.CRI_NAME == this.userInfo.town_stu) {
											getRegion({ CRI_SUPERIOR_CODE: region_3.CRI_CODE }).then(res_3 => {
												console.log('四级地址', res_3);
												this.region4 = res_3  //赋值四级
											})
										}
									})
								})
							}
						})
					})
				}
			});
		}

	},

	methods: {

		getFile(fileVal) {
			console.log(fileVal);
			if (fileVal === 'delete') {
				this.userInfo.other_supporting_materials = []
				return
			}
			this.userInfo.other_supporting_materials.push(fileVal)
			if (this.userInfo.other_supporting_materials.length !== 0) {
				this.$toast('上传文件成功');
			}
			console.log('传回来的文件地址', this.userInfo.other_supporting_materials);
		},
		calculateAge(IDcard) {
			const birthYear = parseInt(IDcard.substr(6, 4));
			const birthMonth = parseInt(IDcard.substr(10, 2));
			const birthDay = parseInt(IDcard.substr(12, 2));
			const currentDate = new Date();
			const currentYear = currentDate.getFullYear();
			const currentMonth = currentDate.getMonth() + 1;
			const currentDay = currentDate.getDate();
			let age = currentYear - birthYear;
			if (
				currentMonth < birthMonth ||
				(currentMonth === birthMonth && currentDay < birthDay)
			) {
				age--;
			}
			return age.toString();
		},
		closePopup() {
			this.u_popup_show = false
			this.check_member_show = false
		},
		getMemberString(member) {
			return Object.entries(member).map(([, value]) => `${value}`).join(', ');
		},


		// 4级地区
		columnChange(e) {
			console.log('picker地区', e.detail.value)
		},
		// 贫困类型
		bindPoolChange: function (e) {
			console.log('picker贫困类型index', e.detail.value)
			let index = parseInt(e.detail.value) //下标
			this.$set(this.userInfo, 'pool_type_stu', parseInt(this.poolList[index].key));
			console.log('选中的贫困提交值', parseInt(this.userInfo.pool_type_stu));
		},
		// 切换性别
		bindGenderChange: function (e) {
			console.log('picker性别index', e.detail.value)
			let index = parseInt(e.detail.value) //下标
			this.$set(this.userInfo, 'gender', parseInt(this.poolList[index].key));
		},
		// 切换政治面貌
		identitChange: function (e) {
			console.log('picker政治面貌index', e.detail.value)
			let index = parseInt(e.detail.value) //下标
			this.$set(this.memberForm, 'political_outlook_tec', parseInt(this.identitList[index].key));

		},
	
		// 图片大图预览
		onPreviewImage(images, current) {
			previewImage(current, images);
		},
		// 删除图片
		onRemoveImage(key, index) {
			let urls = this.userInfo[key];
			urls.splice(index, 1);
			this.$set(this.userInfo, key, urls);
		},
		// 上传图片多张
		onImagesUpload(key) {
			// key : 'images'
			uni.chooseImage({
				count: 9,
				sizeType: ['compressed'],
				success: async res => {
					console.log('普通图片的tempFilePaths', res.tempFilePaths);
					const urls = await uploadFiles(res.tempFilePaths);
					console.log('urls', urls);

					let currentUrls = this.userInfo[key];
					console.log('currentUrls', currentUrls);

					currentUrls = currentUrls.concat(urls);
					this.$set(this.userInfo, key, currentUrls);
					console.log('$set后的form表单', this.userInfo);
				}
			});
		},

		// 隐藏键盘
		hideKeyboard() {
			uni.hideKeyboard()
		},
		// 申报 表单提交
		submit() {
			if (this.userInfo.familyMember?.length === 0) return this.$toast('请添加家庭成员');
			if (this.userInfo.pool_type_stu === null) return this.$toast('请选择贫困类别');
			this.userInfo.status = 0
			this.$refs.form1.validate().then(res => {
				console.log('整个表单校验结果', res);
				console.log(this.userInfo);
				if (res) {
					userApplyArticle({ form: this.userInfo }).then(result => {
						console.log('表单提交结果', result);
						if (result.code === 1) {
							uni.showToast({
								// title: result.msg,
								title: '申报成功,等待审核',
								duration: 1000
							});
							setTimeout(() => {
								uni.navigateBack({
									delta: 3
								});
							}, 1000);
						}
					})
				}
			}).catch(errors => {
				console.log("失败信息:" + JSON.stringify(errors))
				console.log("失败信息:" + errors)
				this.$toast('你的填写输入有误', errors)
			})
		},
		// 保存
		clearValidate_() {
			this.userInfo.status = -1
			userApplyArticle({ form: this.userInfo }).then(result => {
				console.log('表单提交结果', result);
				this.$toast(`${result.msg}`)
				setTimeout(() => {
					uni.navigateBack({
						delta: 3
					});
				}, 1000);
			})
		},

		// 修改成员
		changeMember(index) {
			let _this = this
			uni.navigateTo({
				url: `/pages/test/test`,
				events: {
					// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
					backData: function (data) {
						console.log('修改过的数据', data)
						_this.userInfo.familyMember[index] = _.cloneDeep(data.data)
						_this.$toast('修改成员成功')
						console.log("执行了修改成员");
						_this.$forceUpdate() // 强制更新视图
						// 为什么要用 $forceUpdate 强制更新，估计大概可能是 userInfo 嵌套太深
					},
				},
				success: function (res) {
					console.log(res);
					res.eventChannel.emit('sendGet', { data: JSON.parse(JSON.stringify(_this.userInfo.familyMember[index])) })
				},
			})
		},


		// 添加成员
		addMember() {
			let _this = this
			uni.navigateTo({
				url: `/pages/test/test`,
				events: {
					// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
					backData: function (data) {
						console.log('传回的数据', data)
						_this.userInfo.familyMember.push(JSON.parse(JSON.stringify(data.data)));
						let obj = data.data
						if (Object.keys(obj).every(key => obj[key] !== undefined && obj[key] !== null)) {
							_this.$toast('添加成员成功')
							console.log("执行了添加成员");
						}
					},
				},
				success: function (result) {
					// result.eventChannel.emit('sendGet', res.body)
				},

			})
		
		},
		// 删除成员
		deleteMember(index) {
			this.userInfo.familyMember.splice(index, 1);
		},


		// 一级
		change_1(e) {

			const index = e.detail.value
			let city_stu = this.region1[index]?.CRI_NAME
			let code = this.region1[index]?.CRI_CODE
			if (code == '360300') {
				getRegion({ CRI_SUPERIOR_CODE: code }).then(res => {
					console.log('二级地址', res);
					this.region2 = res  //赋值二级
				})
			}
			this.$set(this.userInfo, 'city_stu', city_stu);
			this.$set(this.userInfo, 'county_stu', '');
			this.$set(this.userInfo, 'town_stu', '');
			this.$set(this.userInfo, 'village_stu', '');
		},
		// 二级
		change_2(e) {
			const index = e.detail.value
			console.log(index);
			let county_stu = this.region2[index]?.CRI_NAME
			let code = this.region2[index]?.CRI_CODE
			getRegion({ CRI_SUPERIOR_CODE: code }).then(res => {
				console.log('三级地址', res);
				this.region3 = res  //赋值三级
			})

			this.$set(this.userInfo, 'county_stu', county_stu);
			this.$set(this.userInfo, 'town_stu', '');
			this.$set(this.userInfo, 'village_stu', '');
		},
		change_3(e) {
			const index = e.detail.value
			console.log(index);
			let town_stu = this.region3[index]?.CRI_NAME
			let code = this.region3[index]?.CRI_CODE
			getRegion({ CRI_SUPERIOR_CODE: code }).then(res => {
				console.log('四级地址', res);
				this.region4 = res  //赋值四级
			})

			this.$set(this.userInfo, 'town_stu', town_stu);
			this.$set(this.userInfo, 'village_stu', '');
		},
		change_4(e) {
			const index = e.detail.value
			console.log(index);
			let village_stu = this.region4[index]?.CRI_NAME
			this.$set(this.userInfo, 'village_stu', village_stu);
		}
	},
	onReady() {
		//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
		this.$refs.form1.setRules(this.rules)
		// this.$refs.memberform.setRules(this.memberRules)
	}

};
</script>

<style lang="scss" scoped>
@import '../style/form_learn.scss'
</style>
```



## uniapp跳转页面传递对象参数

```js
uni.navigateTo({
	url: '/pagesA/car_Detail/car_Detail',
	success: function (res) {
        // highlight-next-line
		res.eventChannel.emit('driver_Detail', { data: data })
	}
})
```

```js
	onLoad(e) {
		let _this = this
        // highlight-next-line
		const eventChannel = this.getOpenerEventChannel();
        // highlight-next-line
		eventChannel.on('driver_Detail', data => {
			console.log(data)
			let obj = _.cloneDeep(data.data)
			Object.keys(obj).forEach(key => {
				if (obj[key] === null && ['audit_status', 'del', 'sex', 'status', 'months'].includes(key)) {
					return; // 跳过处理值为null的Number类型字段
				}
				if (key.startsWith('pic_')) {
					if (obj[key] === null) {
						obj[key] = [];
					} else {
						obj[key] = obj[key].split(',');
					}
				} else {
					obj[key] = obj[key] === null ? '' : obj[key];
				}
			});
			console.log('obj', obj);
			_this.detail = _.cloneDeep(obj)
		})
	},
```

或者直接赋值给响应式变量

```js
	onLoad(e) {
		let _this = this
		const eventChannel = this.getOpenerEventChannel();
		eventChannel.on('driver_Detail', function (data) {
			console.log(data)
            // highlight-next-line
			_this.listData = _.cloneDeep(data.data)
			// 解决问题：返回页面再跳转数据丢失的问题
			// 在这个回调函数中需要赋值给响应式变量
			Object.keys(_this.listData).forEach(key => {
				if (_this.listData[key] === null && ['audit_status', 'del', 'sex', 'status', 'months'].includes(key)) {
					return; // 跳过处理值为null的Number类型字段
				}
				if (key.startsWith('pic_')) {
					if (_this.listData[key] === null) {
						_this.listData[key] = [];
					} else {
						_this.listData[key] = _this.listData[key].split(',');
					}
				} else {
					_this.listData[key] = _this.listData[key] === null ? '' : _this.listData[key];
				}
			});
			_this.detail = _this.listData
		})
	},
```

```js
uni.navigateTo({
	url: `/pagesA/transport_Detail/transport_Detail?orderSn=${code_}&type=${type}`,
	success: function (result) {
		result.eventChannel.emit('sendGet', res.body)
	}
})
```

```js
	onLoad: function (option) {
		const eventChannel = this.getOpenerEventChannel();
		eventChannel.on('sendGet', data => {
			console.log('sendGet接收值', data)
			
		})
	},
```



## 微信小程序持续扫码

微信小程序提供了扫码API：wx.scanCode，但它只能扫一次码，想要实现连续扫码，需要借用 camera 组件。camera 组件不仅能拍照，还具有扫码功能，只要将它的 mode 属性设置为 scanCode，就会在扫码识别成功时触发 bindscancode 事件(在 uniapp 中是 scancode 事件)。

```html
<camera device-position="back" mode="scanCode" resolution="high" :flash="flash" @error="error"
	:style="{ 'height': cameraHeight + 'px' }" @scancode="scanCode">
</camera>
```

```js
// 可以增加一个 canScan 标志位，在扫码成功时令它为 false，隔两秒令它为 true
scanCode: async function (e) {
	if (this.canScan) {
		const params = {
			codes: e.target.result,
			companyId: this.v_loginData.companyId,
			userId: this.v_loginData.id,
			specId: this.specId,
			sn: this.sn
		}
		try {
			const res = await api.doScanOutStock(params)
			console.log('商品出库', res);
			if (res.code === 1) {
				uni.$emit('refreshData');
				this.$refs.uNotify.show({
					top: 40,
					type: 'success',
					message: res.msg,
					duration: 2500,
					fontSize: 20,
					safeAreaInsetTop: true
				})
			} else {
				this.$u_.showToast(`${res.msg}`, 2000)
			}
			this.canScan = false
			this.timeID = setTimeout(() => {
				this.canScan = true;
			}, 2000)
		} catch (err) {
			this.canScan = false
			this.$u_.showToast(err.msg, 2000)
		}
	}
},
```

需要注意的是，摄像头对着码时，会重复扫描多次，这显然不是我们想要的。为了避免这种情况，可以增加一个 canScan标志位，在扫码成功时令它为 false，隔两秒令它为 true，这样就可以隔两秒再去处理扫码结果。

## 持续扫码组件

```html
<template>
	<view @touchmove.stop.prevent="() => { }" class="container">
		<u-navbar z-index="100000" :title-color="v_background.colorBar" :back-icon-color="v_background.colorBar"
			:is-fixed="isFixed" :is-back="isBack" :background="background" :back-text-style="{ color: v_background.colorBar }"
			:border-bottom="borderBottom" :title="title">
			<view @click="$u_.goBack" class="navbar-left">
				<u-icon size="38" name="arrow-left" :color="v_background.colorBar"></u-icon>
			</view>
		</u-navbar>
		<view v-if="top_ !== 0 && cameraHeight !== 0" class="cameraBg"
			:style="{ 'height': cameraHeight + 'px', 'position': 'fixed', 'top': top_ + 'px', 'left': 0 }">
			<camera device-position="back" mode="scanCode" resolution="high" :flash="flash" @error="error"
				:style="{ 'height': cameraHeight + 'px' }" @scancode="scanCode">
			</camera>
		</view>
		<view class="bottom">
			<view class="Button_" @click="showModel">输入编号</view>
			<view class="Button_" @click="openLight">{{ LightText }}</view>
		</view>
		<uv-notify ref="uNotify"></uv-notify>
	</view>
</template>
<script>
import api from '@/shopJS/axios/api.js'
import _ from 'lodash'
export default {
	data() {
		return {
			showLight: false,
			flash: 'off',
			LightText: '打开手电筒',
			background: {
				backgroundColor: '#000000'
			},
			colorBar: '#fff',
			backIconName: 'nav-back',
			isBack: false,
			isFixed: true,
			borderBottom: false,
			cameraHeight: 0,
			top_: 0,
			code: '',
			timeID: 0,
			canScan: true

		}
	},
	props: {
		title: {
			type: String
		},
	},

	created() {
		const that = this;
		uni.getSystemInfo({
			success: function (res) {
				console.log('res.screenHeight    屏幕总高度', res.screenHeight);
				console.log('res.statusBarHeight 状态栏高度', res.statusBarHeight);
				that.top_ = res.statusBarHeight + 44
				console.log('that.top_', that.top_);
				that.cameraHeight = res.screenHeight - res.statusBarHeight - 44 - 150
				console.log('屏幕可使用高度', that.cameraHeight);
			}
		})
	},

	// mounted() {
	// this.throttleFunction()  //首次执行一次，但是这个时候this.code 还没有值
	// this.timeID = setInterval(() => {
	// 	this.throttleFunction();
	// }, 2000);
	// },
	beforeDestroy() {
		clearTimeout(this.timeID);
		uni.vibrateShort();
	},
	methods: {
		// 可以增加一个 canScan 标志位，在扫码成功时令它为 false，隔两秒令它为 true
		scanCode: async function (e) {
			if (this.canScan) {
				const params = {
					codes: e.target.result,
					userId: this.v_loginData.id,
					companyId: this.v_loginData.companyId,
				}
				try {
					const res = await api.doScanUseStock(params)
					console.log('生产销货销库', res);
					if (res.code === 1) {
						// this.$u_.showToast(`${res.msg}`, 2000)
						this.$refs.uNotify.show({
							top: 40,
							type: 'primary',
							message: res.msg,
							duration: 2500,
							fontSize: 20,
							safeAreaInsetTop: true
						})
					} else {
						this.$u_.showToast(`${res.msg}`, 2000)
					}
					this.canScan = false   //如果这里不不变false，this.canScan就还是true， scanCode方法就会持续执行
					this.timeID = setTimeout(() => {
						this.canScan = true;
					}, 2000)
				} catch (err) {
					this.canScan = false
					this.$u_.showToast(err.msg, 2000)
				}
			}
		},
		// 这里只坐一个事把 code 存到 data 里面
		// this.code = e.target.result
		// console.log('this.code', this.code);
		// throttleFunction: _.throttle(function () {
		// 	let _this = this
		// 	// 在这里编写你要执行的代码
		// 	if (_this.code) {
		// 		uni.vibrateShort();
		// 		_this.$emit('getCode', _this.code);
		// 		console.log('执行截流函数');
		// 	}

		// }, 2000),

		openLight() {
			uni.vibrateShort();
			this.showLight = !this.showLight
			switch (this.showLight) {
				case true:
					this.flash = 'on'
					this.LightText = '关闭手电筒'
					break;
				case false:
					this.flash = 'off'
					this.LightText = '打开手电筒'
					break;
			}
		},
		error(e) {
			console.log(e.detail)
		},
		showModel() {
			let _this = this
			uni.showModal({
				title: '输入编号',
				editable: true,
				placeholderText: '请输入编号',
				success: function (res) {
					if (res.confirm) {
						const code = res.content.trim()
						console.log('code', code);
						if (code === '') {
							_this.$u_.showToast('你还没有输入编号', 2000)
							return
						} else {
							_this.$emit('getCode', code);
						}
					} else if (res.cancel) {
					}
				}
			});
		}
	}
}
</script>
<style  scoped>
page {
	background-color: #000000;
	width: 100%;
	height: 100%;
}

.container {
	width: 100%;
	height: 100%;
	background-color: #000000;
	position: relative;
}

.bottom {
	background-color: #000000;
	position: fixed;
	z-index: 100000;
	bottom: 0;
	height: 150px;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}


.Button_ {
	height: 120rpx;
	width: 120rpx;
	color: #fff;
	white-space: nowrap;
	line-height: 120rpx;
	text-align: center;

}

.cameraBg {
	background-color: #fff;
	width: 100%;
}
</style>
```



## 小程序web-view

```html
<template>
	<view @open="onOpen">
		<web-view :src="link" @message="getMessage" @onPostMessage="recivePostMessage" @load="load"></web-view>
	</view>
</template>

<script>
const app = getApp()
export default {
	computed: {
		link() {
			return `http://192.168.19.56:83//#/pages/index/index?user_id=${app.globalData.user_id}`
		}
	},
	created() {
		console.log('app.globalData.user_id', app.globalData.user_id);
		console.log('app.globalData', app.globalData);
	},
	onOpen() {
		uni.hideTabBar();
	},
	methods: {
		getMessage(e) {
			console.log('getMessage', e);
		},
		recivePostMessage(e) {
			console.log('recivePostMessage', e);
		},
		load(e) {
			console.log('load', e);
		},
	}
}
</script>
```

```html
<template>
	<view class="page">
		<!-- 由于是两个项目，$route.query.user_id 不可以在小程序端内嵌跳转的时候打印出来 -->
		<!-- 但是，可以把值放在页面显示 由此判断 是否拿到该路由传参 -->
		<!-- <view>{{ $route.query.user_id }}</view> -->
		<home-banner ref="homeBanner"></home-banner>
		<home-menu></home-menu>
		<home-list ref="homeList"></home-list>
	</view>
</template>
<script>
import JSEncrypt from 'jsencrypt';
import { getUserData } from '@/config/api.js';
export default {
	created() {
		uni.setStorageSync('uid', `${this.$route.query.user_id}`);
		const uid = uni.getStorageSync('uid');
		const encrypt = new JSEncrypt();
		const publicKey = `
		-----BEGIN PUBLIC KEY-----
				、、、、、、、、此处省略一万字
		-----END PUBLIC KEY-----`;
		// 设置公钥
		encrypt.setPublicKey(publicKey);
		// 使用公钥进行加密
		const encryptedUidStorageSync = encrypt.encrypt(uid);
		// 输出加密后的数据
		console.log('uidToken', encryptedUidStorageSync);
		uni.setStorageSync('uidToken', `${encryptedUidStorageSync}`);
		let encryptedUid = uni.getStorageSync('uidToken');
		if (encryptedUid) {
			console.log('存在');
			this.$store.dispatch('user/autoSET_UIDTOKEN', encryptedUid); 
		}
		getUserData({ uid: uid }).then(res => {
			console.log('用户信息', res.data);
			// this.$toast(`${res.data.msg}`);
			uni.setStorageSync('userInfo_h5', res.data);
			let userInfo_h5 = uni.getStorageSync('userInfo_h5');
			console.log('userInfo_h5', userInfo_h5);
			this.$store.dispatch('user/getUserInfo_h5', userInfo_h5);
		})
	},
	// 刷新
	onPullDownRefresh() {		
		this.$refs.homeBanner.fetchData();
		this.$refs.homeList.refresh();
	},
	// 触底
	onReachBottom() {
		this.$refs.homeList.fetchListData();
	},
	methods: {
		formDetail() {             
			uni.navigateTo({
				url: '/pages/form-detail-apply/form-detail-apply'
			});
		},
		formSubmit() {
			uni.navigateTo({
				url: '/pages/form-submit/form-submit'
			});
		},
		overview() {
			uni.navigateTo({
				url: '/pages/overview/overview'
			});
		},
		chatPage() {
			uni.navigateTo({
				url: '/pages/report-chat/report-chat'
			});
		},
	}
};
</script>

<style lang="scss">
page {
	background-color: #f9f9f9;
}

.box_1 {
	height: 100rpx;
	margin: 10px;
	background-color: red;
}

.butt_ {
	height: 100rpx;
	width: 100%;
	background-color: #fff;
	text-align: center;
	line-height: 100rpx;
}
</style>

```



## ucharts 格式化  tooltipFormat

```html
<!-- 解决<qiun-data-charts> 的显示层级问题 -->
		<!-- :canvas2d='true' canvasId='canvans1' -->
		<!-- 一切以真机预览为准（因微信开发者工具显示不正确） -->
		<!-- 此时需要给组件的canvas2d传值true来使用type='2d’的功能，开启此模式后，一定要在组件上自定义canvasId，不能为数字，不能动态绑定，要为随机字符串！ -->
<!-- eopts : ECharts图表配置参数(option)    opts  : uCharts图表配置参数(option) -->
<qiun-data-charts v-if="hhyPipeHasData" :canvas2d='true' canvasId='canvans1' tooltipShow="true" :opts="opts_1"
	type="ring" :chartData="hhyPipe" tooltipFormat="tooltipDemo1" />
```

处理数据

```js

let moneyArr = []
let moneyResult = 0
moneyArr = money.map(item => {
	moneyResult = item.price + moneyResult
	return {
		name: `${this.$u_.switchDangerType(item.dangerous_type)}${(item.price / 10000).toFixed(2)}万元`,
		value: item.price
	}
})
```

**格式化  tooltipFormat**

**我这里使用的是opt**s，**对应的是uCharts图表配置参数**

**打开源码进行修改**  `config-ucharts.js` 

```js
	//下面是自定义format配置，因除H5端外的其他端无法通过props传递函数，只能通过此属性对应下标的方式来替换
	"formatter": {
		"yAxisDemo1": function (val, index, opts) { return val + '元' },
		"yAxisDemo2": function (val, index, opts) { return val.toFixed(2) },
		"xAxisDemo1": function (val, index, opts) { return val + '年'; },
		"xAxisDemo2": function (val, index, opts) { return formatDateTime(val, 'h:m') },
		"seriesDemo1": function (val, index, series, opts) { return val + '元' },
         // highlight-next-line
		"tooltipDemo1": function (item, category, index, opts) {
			// console.log('tooltipDemo1', item, category, index, opts);
			return item.name  //之所以直接返回这个name 是因为这个name值已经被修改成了想要的格式
		},
		"pieDemo": function (val, index, series, opts) {
			if (index !== undefined) {
				return series[index].name + '：' + series[index].data + '元'
			}
		},
	},
```

## ucharts 示例完整代码

```html
<template>
	<view>
		<!-- 解决<qiun-data-charts> 的显示层级问题 -->
		<!-- :canvas2d='true' canvasId='canvans1' -->
		<!-- 一切以真机预览为准（因微信开发者工具显示不正确） -->
		<!-- 此时需要给组件的canvas2d传值true来使用type='2d’的功能，开启此模式后，一定要在组件上自定义canvasId，不能为数字，不能动态绑定，要为随机字符串！ -->
		<!-- 参考链接 https://blog.csdn.net/oneya1/article/details/119679573#:~:text=%E8%A7%A3%E5%86%B3%3A%20%3Acanvas2d%3D%27true%27%20canvasId%3D%27canvans7%27,type%3D%22scatter%22%20%3AchartData%3D%22chartData%22%20%2F%3E%20%E6%B3%A8%E6%84%8F%3Acanvas2d%E8%AE%BE%E7%BD%AE%E4%B8%BAtrue%3BcanvasId%E5%BF%85%E9%A1%BB%E5%94%AF%E4%B8%80-->

		<u-navbar id="head" z-index="10000000000" :title-color="v_background.colorBar"
			:back-icon-color="v_background.colorBar" :is-fixed="isFixed" :is-back="isBack" :background="ec_background"
			:back-text-style="{ color: v_background.colorBar }" :border-bottom="borderBottom" :title="title"
			:back-icon-name="backIconName">
			<view @click="$u_.goBack" class="navbar-left">
				<u-icon size="38" name="arrow-left" :color="v_background.colorBar"></u-icon>
			</view>
		</u-navbar>

		<!-- 下拉框 -->
		<view v-if="showSelector" class="rudon-select__selector" :style="{ 'width': width_ + 'px' }">
			<view scroll-y="true" class="rudon-select__selector-scroll" :style="{ 'width': width_ + 'px' }">
				<view class="rudon-select__selector-item" v-for="(item, index) in options" :key="index"
					@click="selectOneItem(item)"
					style="padding: 10px 0 10px 0; display: flex; flex-direction: row; align-items: center; justify-content: center;">
					<view>{{ item.text }} </view>
				</view>
			</view>
		</view>

		

		<!-- 圆环图 危险品流向 -->
		<view ref="main" class="ec_1 ec_common_w ec_common ec_bottom">
			<!-- eopts : ECharts图表配置参数(option)    opts  : uCharts图表配置参数(option) -->
			<view style="display: flex;">
				<view class="ec_1_box">
					<!-- 格式化提示窗数据 tooltipFormat="tooltipDemo1" -->
					<!-- 2023-8-30 进行 tooltipDemo1 的修改 -->
					<qiun-data-charts v-if="hhyPipeHasData" :canvas2d='true' canvasId='canvans1' tooltipShow="true" :opts="opts_1"
						type="ring" :chartData="hhyPipe" tooltipFormat="tooltipDemo1" />
					<empty-view v-else></empty-view>
				</view>
				<view class="ec_1_box">
					<qiun-data-charts v-if="yhxPipeHasData" :canvas2d='true' canvasId='canvans2' tooltipShow="true" :opts="opts_2"
						type="ring" :chartData="yhxPipe" tooltipFormat="tooltipDemo1" />
					<empty-view v-else></empty-view>
				</view>
			</view>
		</view>

		<!-- 运输监管 -->
		<view class="ec_common_w ec_common ec_bottom">
			<!-- 800rpx -->
			<view style="height: 800rpx;">
				<qiun-data-charts v-if="trifficPipeHasData" :canvas2d='true' canvasId='canvans3' tooltipShow="true" :opts="opts_3"
					type="ring" :chartData="trifficPipe" tooltipFormat="tooltipDemo1" />
				<empty-view v-else></empty-view>
			</view>
		</view>

		<!-- 交易情况 -->
		<view class="ec_common_w ec_common ec_bottom">
			<!-- 800rpx -->
			<view style="height: 800rpx;">
				<qiun-data-charts v-if="moneyPipeHasData" :canvas2d='true' canvasId='canvans4' tooltipShow="true" :opts="opts_4"
					type="ring" :chartData="moneyPipe" tooltipFormat="tooltipDemo1" />
				<empty-view v-else></empty-view>
			</view>
			<view style="height: 100rpx;"></view>
		</view>
		<view style="height: 300rpx;"></view>
	</view>
</template>

<script>

import api from '@/shopJS/axios/api.js'
import uniIcons from '../../uni_modules/uni-icons/components/uni-icons/uni-icons.vue'
import EmptyView from '../../components/empty-view/empty-view.vue'
export default {
	components: { uniIcons, EmptyView },
	data() {
		return {
			canShow: false,
			headData: {},
			selectd_item: '本日',
			selectd_type: 0,  // 下拉框 选择的时间段type

			width_: 100,
			showSelector: false,
			options: [

			],
			title: '平台运营情况',
			colorBar: '#fff',
			backIconName: 'nav-back',
			isBack: false,
			isFixed: true,
			borderBottom: false,
			ec_background: {
				backgroundColor: '#0480f4'
			},
			chartData: {},
			// 圆环图
			hhyPipe: {}, // 黑火药
			yhxPipe: {}, // 引火线
			trifficPipe: {},
			hhyTable: [],
			yhxTable: [],
			sellerMoney: [],
			buyMoney: [],
			moneyPipe: {},
			opts_1: {
				rotate: false,
				rotateLock: false,
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [0, 0, 0, 0],
				dataLabel: false,
				enableScroll: false,
				legend: {   //图例
					show: true,
					position: "bottom",
					lineHeight: 25,
					float: 'bottom',
					fontSize: 10,
				},

				title: {
					name: "黑火药",
					fontSize: 15,
					color: "#666666"
				},
				subtitle: {
					name: ''
				},
				extra: {
					ring: {
						ringWidth: 25,
						activeOpacity: 0.5,
						activeRadius: 10,  //启用Tooltip点击时，突出部分的宽度 //父级元素绝对不能有定位，否则Tooltip失效
						offsetAngle: 0,
						labelWidth: 5,
						border: false,
						borderWidth: 3,
						borderColor: "#FFFFFF"
					},
					tooltip: {
						showBox: true,
						fontSize: 10,
					},
				},

			},
			opts_2: {
				rotate: false,
				rotateLock: false,
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [0, 0, 0, 0],
				dataLabel: false,
				enableScroll: false,
				legend: {
					show: true,
					position: "bottom",
					lineHeight: 25,
					float: 'bottom',
					fontSize: 10,
				},

				title: {
					name: "引火线",
					fontSize: 15,
					color: "#666666"
				},
				subtitle: {
					name: ''
				},
				extra: {
					ring: {
						ringWidth: 25,
						activeOpacity: 0.5,
						activeRadius: 10,  //启用Tooltip点击时，突出部分的宽度 //父级元素绝对不能有定位，否则Tooltip失效
						offsetAngle: 0,
						labelWidth: 5,
						border: false,
						borderWidth: 3,
						borderColor: "#FFFFFF",
					},
					tooltip: {
						showBox: true,
						fontSize: 10,
					},
				},

			},
			opts_3: {
				rotate: false,
				rotateLock: false,
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [0, 0, 0, 0],
				dataLabel: false,
				enableScroll: false,
				legend: {
					show: true,
					position: "bottom",
					lineHeight: 25,
					float: 'bottom'
				},

				title: {
					name: "",
					fontSize: 15,
					color: "#666666"
				},
				subtitle: {
					name: ''
				},
				extra: {
					ring: {
						ringWidth: 30,
						activeOpacity: 0.5,
						activeRadius: 10,  //启用Tooltip点击时，突出部分的宽度 //父级元素绝对不能有定位，否则Tooltip失效
						offsetAngle: 0,
						labelWidth: 5,
						border: false,
						borderWidth: 3,
						borderColor: "#FFFFFF",
						customRadius: 100,   //自定义半径（一般不需要传值，饼图会自动计算半径，自定义半径可能会导致显示图表显示不全）
					}
				},

			},
			opts_4: {
				rotate: false,
				rotateLock: false,
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [0, 0, 0, 0],
				dataLabel: false,
				enableScroll: false,
				legend: {
					show: true,
					position: "bottom",
					lineHeight: 25,
					float: 'bottom'
				},

				title: {
					name: "",
					fontSize: 15,
					color: "#666666"
				},
				subtitle: {
					name: ''
				},
				extra: {
					ring: {
						ringWidth: 25,
						activeOpacity: 0.5,
						activeRadius: 10,  //启用Tooltip点击时，突出部分的宽度 //父级元素绝对不能有定位，否则Tooltip失效
						offsetAngle: 0,
						labelWidth: 5,
						border: false,
						borderWidth: 3,
						borderColor: "#FFFFFF",
						customRadius: 100,   //自定义半径（一般不需要传值，饼图会自动计算半径，自定义半径可能会导致显示图表显示不全）
					}
				},

			},
			hhyPipeHasData: true,
			yhxPipeHasData: true,
			trifficPipeHasData: true,
			moneyPipeHasData: true,
		
		}
	},
	created() {
		this.getChart()
	},

	methods: {
		show() {
			this.showSelector = !this.showSelector
		},

		getChart() {
			// api.getChart({ userId: this.v_loginData.id, type: 5 }).then(res => {

			api.getChart({ userId: this.v_loginData.id, type: this.selectd_type }).then(res => {
				console.log('图表数据', res);

				let obj = res.body.body
				const hhyPipeData = obj.pipe.hhyPipe
				const yhxPipeData = obj.pipe.yhxPipe
				const trifficPipe = obj.table.trifficPipe
				const headData = obj.headData
				const hhyTable = obj.table.hhyTable
				const yhxTable = obj.table.yhxTable
				// 交易
				const sellerMoney = obj.business.sellerMoney
				const buyMoney = obj.business.buyMoney
				const money = obj.business.money

				hhyPipeData.forEach(obj => {
					obj.name = obj.name + obj.value.toFixed(1) + "公斤";
					// obj.value = obj.value.toFixed(1)
				});

				yhxPipeData.forEach(obj => {
					obj.name = obj.name + obj.value.toFixed(1) + "公斤";
					// obj.value = obj.value.toFixed(1)
				});
				// console.log('hhyPipeData', hhyPipeData);
				// 判断有无数据 显示无数据图标
				if (hhyPipeData.length === 0) {
					this.hhyPipeHasData = false
				} else {
					this.hhyPipeHasData = true
				}
				if (yhxPipeData.length === 0) {
					this.yhxPipeHasData = false
				} else {
					this.yhxPipeHasData = true
				}
				if (trifficPipe.length === 0) {
					this.trifficPipeHasData = false
				} else {
					this.trifficPipeHasData = true
				}
				if (money.length === 0) {
					this.moneyPipeHasData = false
				} else {
					this.moneyPipeHasData = true
				}

				// 赋值
				this.sellerMoney = sellerMoney
				this.buyMoney = buyMoney
				this.hhyTable = hhyTable
				this.yhxTable = yhxTable
				this.headData = headData
				this.canShow = true
				let hhyPipe = {
					series: [
						{
							data: [...hhyPipeData]
						}
					]
				};
				this.hhyPipe = JSON.parse(JSON.stringify(hhyPipe))
				// console.log('黑火药数据', this.hhyPipe);

				// 引火线
				let yhxPipe = {
					series: [
						{
							data: [...yhxPipeData]
						}
					]
				};
				this.yhxPipe = JSON.parse(JSON.stringify(yhxPipe))
				// console.log('引火线数据', this.yhxPipe);


				// 运输监管
				let realTrifficPipe = []
				let result = 0  //累加值
				realTrifficPipe = trifficPipe.map(item => {
					result = item.number + result
					return {
						name: `${item.send_company_name}${item.number}次`,
						value: item.number
					}
				})
				console.log('运输监管realTrifficPipe', realTrifficPipe)
				this.$set(this.opts_3.title, "name", `运输${result}次`)

				// 运输监管赋值图表
				let trifficPipe_ = {
					series: [
						{
							data: [...realTrifficPipe]
						}
					]
				};
				this.trifficPipe = JSON.parse(JSON.stringify(trifficPipe_))

				// 交易情况
				let moneyArr = []
				let moneyResult = 0
				moneyArr = money.map(item => {
					moneyResult = item.price + moneyResult
					return {
						name: `${this.$u_.switchDangerType(item.dangerous_type)}${(item.price / 10000).toFixed(2)}万元`,
						value: item.price
					}
				})
				console.log('交易情况moneyArr', moneyArr)
				this.$set(this.opts_4.title, "name", `交易${(moneyResult / 10000).toFixed(2)}万元`)



				let moneyPipe = {
					series: [
						{
							data: [...moneyArr]
						}
					]
				};
				this.moneyPipe = JSON.parse(JSON.stringify(moneyPipe))
				// 本日 昨日。。。
				const arr_ = res.body.head.serchList
				// const arr_ = res.head.serchList

				const arr = arr_.map(item => {
					if (item.id === 0) {
						return {
							value: item.id,
							text: item.name,
							is_selected: true
						}
					} else {
						return {
							value: item.id,
							text: item.name,
							is_selected: false
						}
					}
				})
				this.options = arr

				console.log(this.options);
			})
		},
		selectOneItem(item) {
			console.log(item);
			this.selectd_type = item.value
			this.getChart()
			this.selectd_item = item.text  //单项选择
			this.showSelector = false
			this.options.forEach((ele, i) => {
				if (ele.value == item.value) {
					ele.is_selected = true
				} else {
					ele.is_selected = false
				}
			});
		},
	}
}
</script>
<style>
page {
	background-color: #0480f4;
	width: 100%;
	height: 100%;
}

.flex_1 {
	display: flex;
	justify-content: space-between;
	padding: 10rpx 20rpx
}

.flex_2 {
	display: flex;
	justify-content: space-between;
	flex: 3;
}

.flex_3 {
	flex: 1;
	display: flex;
	justify-content: flex-end;
}

.flex_ {
	display: flex;
	justify-content: space-between;
	padding: 10rpx 20rpx;
	flex-wrap: nowrap;
}

.ec_common_w {
	width: 96%;
	margin-left: 2%;
	background-color: #fff;
}

.ec_bottom {
	margin-bottom: 2rpx;
}

.ec_common {
	-webkit-mask-image: radial-gradient(circle at 7px 7px, transparent 7px, red 7.5px);
	-webkit-mask-position: -7px -7px;
}

.ec_topMsg {
	height: 400rpx;
	position: relative;
	z-index: 1000;
	padding: 10rpx 20rpx;
}

.ec_1_box {
	width: 50%;
	padding: 10px;
}

.rudon-select__selector {
	z-index: 1000000000;
	position: absolute;
	right: 2%;
	top: 130px;
	max-height: 400px;
	background-color: #FFFFFF;
	border: 1px solid #EBEEF5;
	border-radius: 6px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	padding: 4px 0;
	overflow: visible;
}

.rudon-select__selector-item {
	display: flex;
	cursor: pointer;
	line-height: 20px;
	font-size: 14px;
	text-align: center;
	padding: 10px 20px;
	width: auto;
	white-space: nowrap;
	flex-wrap: nowrap;
}

.ec_topMsg_data {
	line-height: 50rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.ec_title {
	font-size: 30rpx;
	font-weight: bold;
	height: 50rpx;
	margin-left: 20rpx;
}

.beyond_h {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block;
	margin-left: 10rpx;
	flex: 3
}
</style>

```








