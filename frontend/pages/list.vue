<template>
  <v-container fluid>
    <v-row>
      <v-col v-show="!objectList[0].sousList" cols="12" sm="6" md="4" lg="3">
        <div class="contenaire" @click="goBackMain">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
          </svg>
          <h3>Retour aux catégories</h3>
        </div>
      </v-col>
      <v-col v-for="(object, index) in objectList" :key="index" cols="12" sm="6" md="4" lg="3">
        <div class="contenaire" @click="object.sousList ? showSubList(object.sousList) : openMenu(object)">
          <img :src="require(`assets/pictures/${object.image}`)" :alt="object.name" />
          <h3>{{ object.name }}</h3>
        </div>
      </v-col>
    </v-row>
    <div v-if="form" style="margin-top: 3rem;">
      <objectForm v-if="$auth.loggedIn" :form-fields="formFields" button-text="add lost object" :submit="addObject"/>
      <h1 v-else>You need to be connected to ask a request</h1>
    </div>
  </v-container> 
</template>

<script>
import objectList from "@/utils/objectList"
import objectForm from "@/components/objectForm"

export default {
  components: {
    objectForm,
  },
  data() {
    return {
      mainList: objectList,
      objectList,
      form: false,
    }
  },
  methods: {
    goBackMain() {
      this.objectList = this.mainList
      this.form = false
    },
    showSubList(arr) {
      this.objectList = arr
    },
    openMenu(obj) {
      this.objectList = [obj]
      this.form = true

      this.formFields = Object.entries(obj.form).reduce((arrFormeField,[key,field]) => {
        const formeField = {
          type: Array.isArray(field.items) ? "select" : (field.type || "text"),
          rules: field.rule ?? [],
          label: key.replace(/_/g, " "),
          value: field.value ?? null,
          items: field.items ?? null
        }

        arrFormeField.push(formeField)

        return arrFormeField
      }, [])
    }, 
    addObject(values) {
      console.log(values)
    }
  }

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
</style>
