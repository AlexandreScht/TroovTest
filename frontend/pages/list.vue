<template>
  <v-container fluid>
    <v-row>
      <v-col v-show="!objectList[0].sousList" cols="12" sm="6" md="4" lg="3">
        <div class="contenaire" @click="objectList = mainList">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
          <h3>Retour aux catégories</h3>
        </div>
      </v-col>
      <v-col v-for="(object, index) in objectList" :key="index" cols="12" sm="6" md="4" lg="3">
        <div class="contenaire" @click="object.sousList ? showSubList(object.sousList) : add(object)">
          <img :src="require(`assets/pictures/${object.image}`)" :alt="object.name" />
          <h3>{{ object.name }}</h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import objectList from "@/utils/objectList"
export default {
  data() {
    return {
      mainList: objectList,
      objectList,
    }
  },
  methods: {
    showSubList(arr) {
      this.objectList = arr;
    }, 
  }

};

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
</style>
