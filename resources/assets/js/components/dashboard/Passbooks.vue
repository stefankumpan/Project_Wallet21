<template>
    <div class="passbooks">
        <ul class="passbooks-list">
            <li v-for="passbook in passbooks">
                <router-link :to="{name:'passbookShow',params: {passbookId: passbook.id}}">
                    <h3>{{passbook.name}}</h3>
                    <ul class="passbook-stats">
                        <li>
                            <span>Aktuell</span>
                            <span class="highlight">{{formatCurrency(passbook.current_status,passbook.currency)}}</span>
                        </li>
                        <li>
                            <span>Ziel</span>
                            <span class="orange highlight">{{formatCurrency(passbook.savings_target,passbook.currency)}}</span>
                        </li>
                    </ul>
                    <app-progressbar
                            :value="calcProcent(passbook.current_status,passbook.savings_target,2)"
                            bar-class="bg-orange">
                        {{calcProcent(passbook.current_status,passbook.savings_target,2)}}%
                    </app-progressbar>
                </router-link>

            </li>
        </ul>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import mixins from '../../utility/mixins'
  import ProgressBar from '../partials/Basic/ProgressBar';


  export default {
    name: "Passbooks",
    mixins: [mixins], computed: mapGetters({
      passbooks: 'getPassbooks',
      refreshStatus: 'getRefreshStatus'
    }),
    components: {
      'app-progressbar': ProgressBar,
    }
  }
</script>

