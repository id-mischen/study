<template>
  <div class="hello">
    <h1> hello world</h1>
    <button @click="handleChange">点击改变</button>
    <van-field
            readonly
            clickable
            label="城市"
            :value="value"
            placeholder="选择城市"
            @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <!--<van-picker-->
              <!--show-toolbar-->
              <!--:columns="columns"-->
              <!--@cancel="showPicker = false"-->
              <!--@confirm="onConfirm"-->
      <!--/>-->
      <van-picker
              show-toolbar
              :columns="columns"
                  @change="onChange"
                  @cancel="showPicker = false"
                  @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>

  const citys = {
    '浙江': [ {id: 1, text: '杭州'},{id: 2, text: '宁波'},{id: 3, text: '温州'},{id: 4, text: '湖州'}],
    '福建': ['福州', '厦门', '莆田', '三明', '泉州']
  };

  export default {
      name: 'HelloWorld',
      data() {
          return {
            show: false,
            value: "",
            showPicker: false,
            columns: [
              {
                values: Object.keys(citys),
                className: 'column1'
              },
              {
                values: citys['浙江'],
                className: 'column2',
                defaultIndex: 2
              }
            ]
          }
      },

      mounted() {
        console.log(Object.keys(citys));
      },
      methods: {
          handleChange() {
              console.log("e")
            this.show = !this.show ;
          },
          onConfirm(value) {
            console.log(value);
            this.value = value[0] + value[1].text;
            this.showPicker = false;
          },
        onChange(picker, values) {
          console.log(values[0]);
          picker.setColumnValues(1, citys[values[0]]);
        }
      }

  }
</script>

<style scoped>

</style>
