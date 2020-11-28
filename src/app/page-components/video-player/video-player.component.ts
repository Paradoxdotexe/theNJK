import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('video') video;
  @Input() src: string;

  playing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    if (this.playing) {
      this.video.nativeElement.pause();
      this.playing = false;
    } else {
      this.video.nativeElement.play();
      this.playing = true;
    }
  }

  onVideoEnd(): void {
    this.video.nativeElement.load();
    this.playing = false;
  }

}
