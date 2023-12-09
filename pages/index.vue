<script setup lang="ts"></script>

<template>
  <div class="dash-main">
    <div class="gist-grid">
      <create-gist />
      <gist
        content="Everybody knows UNILAG has the best soccer players,  ask
anybody. Just wait for HiFL to start."
        :follows="452"
        :quotes="297"
        :retweets="641"
        school="UNILAG, Lagos"
        occupation="Student"
        avatar="badassjess.png"
        handle="badassjess"
      />
      <gist
        content="Hey guys, please vote our girl @spicy_Q for the SityWatch Beauty Pageant finals. Just follow link: https://www.sitywatch.com/beautypagent/chjsdbhghegh/
votepanel/"
        :follows="300"
        :quotes="182"
        :retweets="77"
        school="Nile University, Abuja"
        occupation="Student"
        image="post_image.png"
        avatar="jamkol23.png"
        handle="jamkol23"
      />
    </div>
  </div>
</template>
