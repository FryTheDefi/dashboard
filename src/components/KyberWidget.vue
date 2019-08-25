<template>
<b-tooltip
            label="Kyber token swap: For token swipe you have to use your private key you can find it in Torus Button > Settings > Show private key and then paste it into kyberswap"
            multilined
            position="is-bottom">
            <a href='https://widget.kyber.network/v0.7.1/?type=swap&mode=popup&callback=https%3A%2F%2Fkyberpay-sample.knstats.com%2Fcallback&paramForwarding=true&network=ropsten&lang=en&theme=theme-emerald'
class='kyber-widget-button theme-emerald theme-supported' name='KyberWidget - Powered by KyberNetwork' title='Pay with tokens'
target='_blank'>Swap tokens</a>
        </b-tooltip>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class KyberWidget extends Vue {
}
</script>