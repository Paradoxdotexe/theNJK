import { Component, Input, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-development-carousel',
  templateUrl: './development-carousel.component.html',
  styleUrls: ['./development-carousel.component.scss']
})
export class DevelopmentCarouselComponent implements OnInit {
  @ViewChildren('img') images;
  @Input() contentKey: string; // used to get image paths
  @Input() contentCount: number; // number of images
  @Input() contentType: string; // 'mobile' or 'web'

  // stay the same between content types
  contentPath: string; // path to entry content based on contentKey
  contentIndex = 1; // primary image index
  contentIndices; // [1, 2, 3, ...contentCount], used to generate index circle indicators
  rotating = false; // if carousel is actively rotating as determined by callRotate
  rotateQueue = []; // queue of quickly made calls to rotate carousel

  // change between content types
  contentLeft: number; // next image index going backwards
  contentRight: number; // next image index going forwards

  constructor() { }

  ngOnInit(): void {
    this.contentPath = 'assets/content/development/' + this.contentKey + '/';
    this.contentIndices = Array(this.contentCount).fill(0).map((x, i) => i + 1);

    this.contentLeft = this.contentType === 'mobile' ? this.contentCount - 1 : this.contentCount;
    this.contentRight = this.contentType === 'mobile' ? 3 : 2;
  }

  // regulate speed of carousel rotation using a delayed queue
  callRotate(forwards: boolean): void {
    if (!this.rotating) {
      this.rotate(forwards);
      this.rotating = true;
      this.delay(350).then(() => {
        this.rotating = false;
        if (this.rotateQueue.length > 0) {
          this.callRotate(this.rotateQueue.shift());
        }
      });
    } else {
      if (this.rotateQueue.length < 2) {
        this.rotateQueue.push(forwards);
      }
    }
  }

  // automatically rotate to a chosen index, called by index indicator circles
  callRotateTo(index: number): void {
    if (this.contentIndex !== index) {
      let forwardIndex = this.contentIndex;
      let backwardIndex = this.contentIndex;
      let rotations = 0;
      // calculate if it's faster to go forwards or backwards and how many rotations it will take
      while (forwardIndex !== index && backwardIndex !== index) {
        forwardIndex = this.increase(forwardIndex);
        backwardIndex = this.decrease(backwardIndex);
        rotations++;
      }
      // choose fastest direction or direction that doesn't wrap if they're the same
      let direction = forwardIndex === index;
      if (forwardIndex === backwardIndex) {
        direction = index - this.contentIndex > 0;
      }
      // call needed number of rotations
      this.rotateQueue = Array(rotations - 1).fill(direction);
      this.callRotate(direction);
    }
  }

  // rotate carousel forwards and backwards
  rotate(forwards: boolean): void {
    // rotate image classes
    for (const image of this.images) {
      const classList = image.nativeElement.classList;
      if (this.contentType === 'mobile') {
        if (classList.contains('img-left')) {
          classList.replace('img-left', forwards ? 'img-back' : 'img-front');
          classList.remove('img-side');
        } else if (classList.contains('img-front')) {
          classList.replace('img-front', forwards ? 'img-left' : 'img-right');
          classList.add('img-side');
        } else if (classList.contains('img-right')) {
          classList.replace('img-right', forwards ? 'img-front' : 'img-back');
          classList.remove('img-side');
        } else { // img-back
          image.nativeElement.src = this.contentPath + (forwards ? this.contentRight : this.contentLeft) + '.png';
          classList.replace('img-back', forwards ? 'img-right' : 'img-left');
          classList.add('img-side');
        }
      } else { // web content type
        if (classList.contains('img-left')) {
          if (!forwards) {
            image.nativeElement.src = this.contentPath + this.contentLeft + '.png';
          }
          classList.replace('img-left', forwards ? 'img-right' : 'img-front');
        } else if (classList.contains('img-front')) {
          classList.replace('img-front', forwards ? 'img-left' : 'img-right');
        } else { // img-right
          if (forwards) {
            image.nativeElement.src = this.contentPath + this.contentRight + '.png';
          }
          classList.replace('img-right', forwards ? 'img-front' : 'img-left');
        }
      }
    }
    // update content indices
    this.contentRight = forwards ? this.increase(this.contentRight) : this.decrease(this.contentRight);
    this.contentLeft = forwards ? this.increase(this.contentLeft) : this.decrease(this.contentLeft);
    this.contentIndex = forwards ? this.increase(this.contentIndex) : this.decrease(this.contentIndex);
  }

  // increase number without going over the content count
  increase(n): number {
    return n === this.contentCount ? 1 : n + 1;
  }

  // decrease number without going under 1
  decrease(n): number {
    return n === 1 ? this.contentCount : n - 1;
  }

  // asynchronous time delay
  async delay(ms: number): Promise<null> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
