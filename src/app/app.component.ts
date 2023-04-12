import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  track: MediaStreamTrack | null = null;

  async share() {
    if (this.track != null) {
      this.track.stop();
    }
    const video = document.getElementById("video") as HTMLVideoElement;
    var stream = await navigator.mediaDevices.getDisplayMedia({ audio: false, video: true });
    video.srcObject = stream;
    this.track = stream.getTracks()[0];
  }
}
