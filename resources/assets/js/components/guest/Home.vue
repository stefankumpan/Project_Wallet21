<template>
    <div>
        <div class="hero-banner">
            <div class="hero-content">
                <p class="hero-text"><span class="highlight">Wallet 21</span> hilft dir,
                    <span class="highlight">Einnahmen & Ausgaben</span>
                    einfach zu erfassen. Ordnen Sie Ihre Belege in <span class="highlight">Konten</span> und <span
                            class="highlight">Kategorien</span> hinzu.</p>
                <p class="hero-text">Und profitiere von der geschaffenen <span class="highlight">Ordnung</span>.</p>

                <div class="action">
                    <router-link :to="{name:'signup'}" class="btn btn-success">Kostenlos Anmelden</router-link>
                </div>
            </div>

        </div>
        <div class="wrapper home">
            <div class="intro">
                <h2>Finanzen ganz einfach!</h2>
                <p>Wallet 21 hilft Ihnen, die Kontrolle über Ihre Finanzen zu bekommen.</p>
                <p>Mit nur einem Blick sehen Sie Ihre Einnahmen und Ausgaben.</p>
                <p> Digitalisieren Sie Ihre Belege, nie wieder eine Rechnung verlieren. Einfach den Beleg als Foto
                    hinzufügen, damit Sie diesen jederzeit zu Hand haben. Egal ob Sie zu Hause oder unterwegs sind. Sie
                    können Ihre Finanzen jederzeit zu Bearbeiten, neue Hinzufügen und Löschen.
                </p>
            </div>
            <h3 class="devices-title">Wallet 21 auf Ihren PC, Tablet & Smartphone </h3>
            <div class="devices-image">
                <img :src="devicesImage" alt="Wallet 21 devices">
            </div>
            <div class="info-box">
                <div class="info">
                    <h3>Setzen Sie sich Sparziele</h3>
                    <p>Jeder der auf seine Finanzen achtet, sollte sich auch Belohnen.
                        Sie können sich einfach <span class="highlight">Sparziele</span> erstellen und zu <span
                                class="highlight">jedem Zeitpunkt</span> den Fortschritt sehen.
                        Belohnen Sie sich selbst und sein Sie stolz auf jedes Ziel, dass Sie erreichen!</p>
                </div>
                <div class="image">
                    <img :src="passbookImage" alt="Sparkonto,Sparziel">
                </div>
            </div>

            <div class="info-box m-column-reverse">
                <div class="image">
                    <img :src="exchange" alt="Währungsumrechnung">
                </div>
                <div class="info">
                    <h3>Währungsumrechnung </h3>
                    <p>Sie Fahren in Urlaub oder ziehen in ein anderes Land?</p>
                    <p>Kein Problem lassen Sie sich Ihr Konto einfach automatische in Ihre neue Währung umrechnen.</p>
                </div>
            </div>

            <div class="info-box">
                <div class="info">
                    <h3>CSV Import</h3>
                    <p> Importieren Sie einfach Ihre CSV Dateien. Template runterladen oder Ihre CSV Datei anpassen.
                        Hochladen und alle Ihre Einnahmen und Ausgaben sind gespeichert.</p>
                </div>
                <div class="image">
                    <img :src="csvImport" alt="CSV Import">
                </div>
            </div>
            <div class="info-box m-column-reverse">
                <div class="image">
                    <img :src="csvExport" alt="CSV Export">
                </div>
                <div class="info">
                    <h3>CSV Export </h3>
                    <p>Sie brauchen einen schnellen Auszug von Ihren Konten, kein Problem einfach als CSV exportieren
                        und Herunterladen.</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import mixins from '../../utility/mixins';
  import {AppUrl} from '../../utility/config';
  import moment from 'moment';


  export default {
    name: "Home",
    mixins: [mixins],
    data() {
      return {
        AppUrl,
        devicesImage: AppUrl + 'images/home/devices.png',
        passbookImage: AppUrl + 'images/home/passbook.svg',
        csvImport: AppUrl + 'images/home/csvImport.svg',
        csvExport: AppUrl + 'images/home/csvExport.svg',
        exchange: AppUrl + 'images/home/exchange.svg',
      }
    }, created() {
      if (this.$route.params.partnerKey !== undefined) {
        // console.log(this.$route.name);
        // console.log(this.$route.params);
        // console.log(this.$route.params.partnerKey);
        let cookieDate = new Date(moment().add(14, 'day').toDate());
        document.cookie = "partnerKey=" + this.$route.params.partnerKey + "; expires=" + cookieDate;
      }
    }
  }
</script>

