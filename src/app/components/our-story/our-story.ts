import { Component, ChangeDetectionStrategy } from '@angular/core';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-our-story',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './our-story.html',
  styleUrl: './our-story.css',
})
export class OurStory {
  protected readonly milestones: TimelineItem[] = [
    {
      year: '2019',
      title: 'First Met',
      description:
        'Our paths crossed for the first time, and everything changed. A chance encounter that would shape the rest of our lives.',
    },
    {
      year: '2021',
      title: 'Started Dating',
      description:
        'What started as friendship blossomed into something beautiful. We knew this was the beginning of a lifelong adventure.',
    },
    {
      year: '2025',
      title: 'The Proposal',
      description:
        'With a heart full of love, the question was asked… and the answer was yes! A moment we will treasure forever.',
    },
    {
      year: '2027',
      title: 'The Wedding',
      description: 'The beginning of our forever ♥',
      highlight: true,
    },
  ];
}
