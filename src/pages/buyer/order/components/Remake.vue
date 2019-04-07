<template>
  <div class="remake">
    <div class="content">
      <div>
        <label for="remake-content">备注：</label>
        <input id="remake-content" type="text" placeholder="选填，先和商家协商一致">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderRemake'
}
</script>

<style scoped>
  .remake{
    padding: .15rem;
    background-color: #eeeeee;
  }
  .content{
    padding: .15rem;
    border-radius: .1rem;
    background-color: white;
  }

</style>
