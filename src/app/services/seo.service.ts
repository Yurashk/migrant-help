import { Injectable, inject, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  updateMetaTags(config: SeoConfig): void {
    // Update title
    this.title.setTitle(config.title);

    // Basic meta tags
    this.meta.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Robots meta tag
    if (config.noIndex) {
      this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    }

    // Open Graph meta tags
    this.meta.updateTag({ property: 'og:title', content: config.ogTitle || config.title });
    this.meta.updateTag({ property: 'og:description', content: config.ogDescription || config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    
    if (config.ogUrl) {
      this.meta.updateTag({ property: 'og:url', content: config.ogUrl });
    }
    
    if (config.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: config.ogImage });
    }

    // Twitter Card meta tags
    this.meta.updateTag({ name: 'twitter:card', content: config.twitterCard || 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.twitterTitle || config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.twitterDescription || config.description });
    
    if (config.twitterImage) {
      this.meta.updateTag({ name: 'twitter:image', content: config.twitterImage });
    }
  }

  setCanonicalUrl(url: string): void {
    // Only manipulate DOM in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    
    link.setAttribute('href', url);
  }

  resetMetaTags(): void {
    // Reset to default values
    this.title.setTitle('Rooted - Support for Migrants in Belgium');
    this.meta.updateTag({ name: 'description', content: 'Rooted helps newcomers in Belgium navigate local services like CPAS/OCMW, Actiris, and VDAB. Multilingual support available.' });
  }
}
