<template>
  <div class="map">
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import { db, auth } from "@/firebase/init";

export default {
  name: "GMap",
  data() {
    return {
      lat: 53,
      lng: 10,
    };
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: this.lat,
          lng: this.lng,
        },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false,
      });
    },
  },
  mounted() {
    let user = auth.currentUser;
    console.log("User: ");
    console.log(user);

    if (navigator.geolocation && user) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;

        db.collection("users")
          .where("user_id", "==", user.uid)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              db.collection("users")
                .doc(doc.id)
                .update({
                  geolocation: {
                    lat: this.lat,
                    lng: this.lng,
                  },
                });
            });
          })
          .then(() => {
            this.renderMap();
          });
      }),
        (err) => {
          console.log(err);
          this.renderMap();
        },
        { maximumAge: 60000, timeout: 3000 };
    } else {
      this.renderMap();
    }
  },
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
