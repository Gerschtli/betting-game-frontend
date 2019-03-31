<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md4)
        v-card(class="elevation-12")
          v-card-text
            v-form
              v-text-field(
                prepend-icon="person"
                name="login"
                label="Benutzername"
                type="text"
              )
              v-text-field(
                prepend-icon="lock"
                name="password"
                label="Passwort"
                type="password"
              )
          v-card-actions
            v-spacer
            v-btn(color="primary") Login
</template>
