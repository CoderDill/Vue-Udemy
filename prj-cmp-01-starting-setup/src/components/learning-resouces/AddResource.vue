<template>
  <base-dialog v-if="inputIsValid" title="Invalid Input">
    <template #default>
      <p>At least one field empty.</p>
      <p>Please enter a few characters.</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descInput"
        />
      </div>
      <div class="form-control">
        <label for="link">URL: </label>
        <input type="url" name="link" id="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Submit</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsValid: false,
    };
  },
  components: {
    BaseCard,
    BaseButton,
    BaseDialog,
  },
  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descInput.value;
      const link = this.$refs.linkInput.value;

      if (
        title.trim() === '' ||
        description.trim() === '' ||
        link.trim() === ''
      ) {
        this.inputIsValid = true;
        return;
      }

      this.addResource(title, description, link);
    },
    confirmError() {
    this.inputIsValid = false;
  }
  },
  
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>