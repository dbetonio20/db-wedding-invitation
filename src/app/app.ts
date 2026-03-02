import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { EnvelopeLanding } from './components/envelope-landing/envelope-landing';
import { Navigation } from './components/navigation/navigation';
import { Hero } from './components/hero/hero';
import { PhotoPanel } from './components/photo-panel/photo-panel';
import { OurStory } from './components/our-story/our-story';
import { Countdown } from './components/countdown/countdown';
import { Invitation } from './components/invitation/invitation';
import { Gallery } from './components/gallery/gallery';
import { Venue } from './components/venue/venue';
import { Rsvp } from './components/rsvp/rsvp';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    EnvelopeLanding,
    Navigation,
    Hero,
    PhotoPanel,
    OurStory,
    Countdown,
    Invitation,
    Gallery,
    Venue,
    Rsvp,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly siteRevealed = signal(false);

  onEnvelopeRevealed(): void {
    this.siteRevealed.set(true);
  }
}

