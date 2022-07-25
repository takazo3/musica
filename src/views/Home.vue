<template>
  <div>
  <main>  
    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div
        class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(assets/img/header.png)"
      ></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold font-Poppins text-5xl mb-5 text-violet-300">Share and Listen to Greate music!</h1>
          <p class="w-full md:w-8/12 mx-auto text-violet-100">
            音楽は国境を越え、人々を繋いでくれる。<br />
            思い出を深く刻み、時にはその音楽であらゆる香りを感じる。<br />
            あなたのお気に入りの音楽で素敵な時間を・・・
          </p>
        </div>
      </div>


    </section>

    <!-- Main Content -->
    <section class="container mx-auto ">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col bg-orange-300">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200" v-icon.right.rose="'headphones-alt'">
          <span class="card-title text-xl text-purple-700">Songs</span>
          <!-- icon -->

        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <app-song-item v-for="song in songs" :key="song.docID" :song="song" />
        </ol>
        <!-- end Playlist -->
      </div>
    </section>
  </main>  
  </div>
</template>
<script>
import { songsCollection } from "@/includes/firebase";
import AppSongItem from "@/components/SongItem.vue";
import IconSecondary from "@/directives/icon-secondary";
export default {
  name: "home",
  components: {
    AppSongItem,
  },
  directives: {
    'icon-secondary': IconSecondary,
  },
  data() {
    return {
      songs: [],
      maxPage: 25,
      pendingRequest: false,
    };
  },
  async created() {
    this.getSongs();

    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

      if(bottomOfWindow) {
        this.getSongs();
      }
    },  
    async getSongs() {
      if (this.pendingRequest){
        return;
      }

      this.pendingRequest = true;

      let snapshots;

      if(this.songs.length){
      const lastDoc = await songsCollection
      .doc(this.songs[this.songs.length -1].docID)
      .get();
      snapshots = await songsCollection
      .orderBy('modified_name')
      .startAfter(lastDoc)
      .limit(this.maxPage)
      .get();
      } else {
      snapshots = await songsCollection
      .orderBy('modified_name')
      .limit(this.maxPage)
      .get();        
      }


    snapshots.forEach((document) => {
      this.songs.push({
        docID: document.id,
        ...document.data(),
      });
    });

      this.pendingRequest = false;
    }
  }
};
</script>
