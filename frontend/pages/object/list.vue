<template>
    <v-container fluid>
      <v-row v-if="objectList?.length" class="row">
        <v-col v-for="(object, index) in objectList" id="col" :key="index" cols="12" sm="6" md="4" lg="3">
          <div class="contenaire" @click="$router.push({ name: 'Detail', params: { id: object._id } })">
            <img :src="require(`assets/pictures/${object.objectType.picture}`)" :alt="object.objectType.name" />
            <h3>{{ object.objectType.name }}</h3>
          </div>
        </v-col>
      </v-row>
      <h1 v-else-if="objectList === null">No object in list</h1>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      objectList: []
    }
  },
  async created() {
    await this.$store.dispatch("object/findAll")
    this.objectList = this.$store.state.object.objects
  },
}
</script>

<style lang="scss" scoped>
 .contenaire{
  width: 16rem; height: 13rem;
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
  &:hover{
    background: #cacaca60;
    cursor: pointer;
  }
 }
  .row{
    margin-top: 8vw;
 }
</style>