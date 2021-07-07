<template>
    <footer class="site-footer">
        <div class="footer-box">
            <div class="social-media">
                <ul>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i class="icon-instagram"></i>
                            <span class="visually-hidden">instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank">
                            <i class="icon-twitter"></i>
                            <span class="visually-hidden">twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i class="icon-facebook"></i>
                            <span class="visually-hidden">facebook</span>
                        </a>
                    </li>

                </ul>
            </div>
            <div class="footer-info">
                <ul>
                    <li>
                        <router-link :to="{name:'privacy'}">Datenschutz</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'agbs'}">AGBs</router-link>
                    </li>

                    <li>
                        <router-link :to="{name:'inprint'}">Impressum</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <small>&copy; Wallet 21</small>
    </footer>
</template>

<script>
  export default {
    name: "DefaultFooter"
  }
</script>

