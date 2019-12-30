<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 is-hidden-mobile    ">
        <span class="enveloppe">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </span>
      </div>
      <div class="is-6 is-offset-1 column">
        <h2 class="is-2">Contactez moi</h2>
        <form
          name="contact"
          action=""
          method="post"
          v-if="!submittedMessage"
          v-on:submit.prevent="sendMessage"
        >
          <p>
            <label
              >Votre e-mail * :
              <input
                class="input is-primary"
                required
                type="email"
                name="email"
                v-model="email"
            /></label>
          </p>
          <p>
            <label
              >Votre message:
              <textarea
                class="textarea is-primary"
                required
                name="message"
                rows="4"
                v-model="message"
              ></textarea
            ></label>
          </p>
          <p>
            <button class="button is-primary">Envoyer</button>
          </p>
        </form>
        <div
          v-if="submittedMessage"
          v-html="submittedMessage"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['siteInfos'],
  data() {
    return {
      message: '',
      email: '',
      submittedMessage: '',
      notificationType:''
    }
  },
  mounted() {},
  methods: {
    async sendMessage() {
      const urlMail ='https://wegfm6uwi8.execute-api.eu-central-1.amazonaws.com/sendmail/contact-me'
      const mail = {
        email: this.email,
        message: this.message
      }

      const result = await this.$axios({
        method:"post",
        url:urlMail,
        data: mail
      })

      if(result.status=200){
        this.submittedMessage =
        '<div class="is-success notification"><p>Votre message a bien été envoyé.</p><p>Je vous recontacterai très prochainement.</p></div>'
      }else{
        this.submittedMessage =
        '<div class="is-alert notification"><p>Une erreur s\'est produite. Veuillez me contacter à fabien.grignoux@outlook.com</p></div>'
      }
    }
  }
}
</script>
