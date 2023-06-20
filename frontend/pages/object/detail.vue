<template>
  <v-container fluid>
    <div id="main">
      <div v-if="getObject.objectType" id="contenaire">
        <img :src="require(`assets/pictures/${getObject.objectType.picture}`)" :alt="getObject.objectType.name" />
        <h3>{{ getObject.objectType.name }}</h3>
      </div>
      <div v-if="getObject.properties" id="infos">
        <div v-for="(value, key) in getObject.properties" :key="key">
          <span v-for="(item, itemKey) in Object.entries(value)" :key="itemKey">
            <span class="keys">{{ item[0].replaceAll("_", " ") }} :</span>
            <span>{{ item[1] }}</span>
          </span>
        </div>
        <div>
          <button id="btn" @click="$router.push({ name: 'Edit', params: { id: $route.params.id } })">Edit / Delete</button>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      getObject: {}
    }
  },
  async created() {
    const id = this.$route.params.id
    await this.$store.dispatch("object/findOne", { id })
    this.getObject = this.$store.state.object.object
  },
}
</script>

<style lang="scss" scoped>

#main{
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vw 0;
  #contenaire{
   width: 16rem; height: 100%;
   border: solid gray 0.1em;
   display: flex;
   align-items: center;
   flex-direction: column;
   border-radius: 0.55em;
   padding: 0.25em 0.5em;
   img, svg{
     width: 70%;
     height: 70%;
   }
   h3{
     margin: 1.5em 0 0;
     width: 100%;
     text-align: center;
   }
  }
  #infos{
    width: 40%;
    margin-left: auto;
    margin-right: 0;
    min-height: 30vw;
    background-color: rgb(71, 71, 71);
    color: rgb(230, 230, 230);
    border-radius: 1em;
    border: solid 0.12em grey;
    box-shadow: 0.1em 0.1em 0.05em grey;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    padding: 2em 0;
    div{
      margin: 0.5em 0;
    }
  }
  #btn{
    background: #e0f3f263;
    padding: 0.35em 0.6em;
    border-radius: 0.35em;
    cursor: pointer;
  }
}
</style>