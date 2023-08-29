var myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin ');
    },
    printMixin: function () {
      console.log('print this is mixin ');
    }
  },
}

export default myMixin;