<template>
  <v-container fluid>
    <div id="main">
      <div v-if="getObject.objectType" id="contenaire">
        <h3>{{ getObject.objectType.name }}</h3>
        <img :src="require(`assets/pictures/${getObject.objectType.picture}`)" :alt="getObject.objectType.name" />
      </div>
    </div>
    <div style="margin-top: 3rem;">
      <objectForm :form-fields="formFields" button-text="Edit this object" :submit="editObject" :delete-obj="deleteObject" :description="description"/>
    </div>
  </v-container>
</template>


<script>
import objectList from "@/utils/objectList"
export default {
  data() {
    return {
      getObject: {},
      formFields: [],
      description: null,
    }
  },
  async created() {
    const id = this.$route.params.id
    await this.$store.dispatch("object/findOne",{ id })
    const object = this.$store.state.object.object
    this.getObject = object
    const values = object.properties.reduce((obj, item) => {
        for (const key in item) {
          obj[key] = item[key]
        }
        
      return obj
    },{})

    const objectForm = this.getObjectForm(object.objectId)
    this.formFields = Object.entries(objectForm.form).reduce((arrFormeField,[key,field]) => {
      const formeField = {
        type: Array.isArray(field.items) ? "select" : (field.type || "text"),
        rules: field.rule ?? [],
        label: key.replace(/_/g, " "),
        value: values[key],
        items: field.items ?? null
      }

      arrFormeField.push(formeField)

      return arrFormeField
    },[])

    if (values.description) {
      this.description = values.description
    }
  },
  methods: {
    getObjectForm(id) {
      for (const category of objectList) {
        for (const item of category.sousList) {
          if (item.id === id) {
            return item 
          }
        }
      }

    return null
    },
    async editObject(values) {
      const id = this.getObject._id
      await this.$store.dispatch(`object/update`, { payload: { values, id } })
    },
    async deleteObject() {
      const id = this.getObject._id
      await this.$store.dispatch(`object/delete`, { id }).then(() => {
        this.$router.push({ name: "Home" })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#main{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  #contenaire{
  width: 20rem; height: 20rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  img, svg{
    width: 70%;
    height: 70%;
  }
  h3{
    margin: 1.5em 0 0;
    text-align: center;
    width: 100%;
  }
 }
}
</style>