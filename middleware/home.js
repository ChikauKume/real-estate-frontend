export default function ({ store, redirect, route }) {
  this.$router.push({
    path: this.$route.query.redirect || '/'
  })
}