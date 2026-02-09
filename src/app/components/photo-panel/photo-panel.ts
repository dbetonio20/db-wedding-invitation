import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-photo-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="photo-panel"
      [style.background-image]="'url(' + src() + ')'"
      [attr.aria-label]="alt()"
      role="img"
    >
      <div class="photo-panel__overlay"></div>
      @if (caption()) {
        <p class="photo-panel__caption script-font">{{ caption() }}</p>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 0;
    }

    .photo-panel {
      height: 100dvh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 3rem;
    }

    .photo-panel__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.05) 0%,
        rgba(0, 0, 0, 0.25) 100%
      );
      pointer-events: none;
    }

    .photo-panel__caption {
      position: relative;
      z-index: 1;
      color: rgba(255, 255, 255, 0.9);
      font-size: clamp(1.25rem, 3vw, 2rem);
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
      text-align: center;
      padding-inline: 1.5rem;
    }
  `,
})
export class PhotoPanel {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly caption = input<string>('');
}
