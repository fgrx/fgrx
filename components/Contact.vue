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
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label
              >Votre e-mail * :
              <input class="input" required="" type="email" name="email"
            /></label>
          </p>
          <p>
            <label
              >Titre du message : <input class="input" type="text" name="titre"
            /></label>
          </p>
          <p>
            <label
              >Votre message:
              <textarea
                class="textarea"
                required=""
                name="message"
                rows="4"
              ></textarea
            ></label>
          </p>
          <p>
            <button class="button" type="submit">Envoyer</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  mounted() {}
}
</script>
