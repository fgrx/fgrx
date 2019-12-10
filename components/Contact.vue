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
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label
              >Votre nom * :
              <input class="input is-primary" required type="text" name="nom"
            /></label>
          </p>
          <p>
            <label
              >Votre prénom * :
              <input class="input is-primary" required type="text" name="prenom"
            /></label>
          </p>
          <p>
            <label
              >Votre e-mail * :
              <input class="input is-primary" required type="email" name="email"
            /></label>
          </p>
          <p>
            <label
              >Votre numéro de Téléphone :
              <input
                class="input is-primary"
                required
                type="tel"
                name="telephone"
            /></label>
          </p>
          <p>
            <label
              >Titre du message :
              <input class="input is-primary" type="text" name="titre"
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
              ></textarea
            ></label>
          </p>
          <p>
            <button class="button is-primary" type="submit">Envoyer</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props:["siteInfos"],
  mounted() {}
}
</script>
