<template>
  <div class="auth">
    <div class="login">
      <div class="login-content">
        <h1>Beta access</h1>
        <div class="login-form">
          <div class="input-group">
            <p>username</p>
            <input class="entry" type="email" placeholder="|" />
          </div>
          <div class="input-group">
            <p>token</p>
            <input class="entry" type="text" placeholder="|" />
          </div>

          <button>login</button>
        </div>
      </div>
    </div>

    <div class="join">
      <div class="join-content">
        <h1>Not signed up yet?</h1>
        <div class="join-form">
          <div class="input-group">
            <input class="entry" type="text" placeholder="name" />
          </div>
          <div class="input-group">
            <input class="entry" type="email" placeholder="email" />
          </div>
          <div class="input-group">
            <input class="entry" type="text" placeholder="company" />
          </div>
          <div class="input-group">
            <select class="entry" name="city">
              <option value="" disabled selected>City</option>
              <option value="berlin">Berlin</option>
              <option value="london">London</option>
              <option value="stockholm">Stockholm</option>
              <option value="other">other</option>
            </select>
          </div>

          <div class="input-group text-area">
            <textarea placeholder="why you?" />
          </div>

          <button>sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  components: {},
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
