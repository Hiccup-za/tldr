<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  },
  render (h, { props, slots }) {
    return h('span', {
      class: ['colorBadge', props.type],
      style: {
        verticalAlign: props.vertical
      }
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus" scoped>
.colorBadge
  margin-top 10px
  display inline-block
  font-size 14px
  height 22px
  line-height 22px
  border-radius 3px
  padding 0 6px
  color black
  &.recommended
    background-color $badgeRecommended
  &.indifferent
    background-color $badgeIndifferent
  &.notRecommended
    background-color $badgeNotRecommended
  &.ps5
    background-color $badgePS5
  &.ps4
    background-color $badgePS4
  &.xboxOne
    background-color $badgeXboxOne
  &.switch
    background-color $badgeSwitch
  &.psPlus
    background-color $badgePsPlus
  &.xboxGamesPass
    background-color $badgeXboxGamesPass
  & + &
    margin-left 5px
</style>