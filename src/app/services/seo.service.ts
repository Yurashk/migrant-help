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
  ogSiteName?: string;
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
  private platformId = inject(PLATFORM_ID);

  // Дефолтні налаштування українською мовою
  private readonly DEFAULT_TITLE = 'SVOI — Допомога мігрантам у Бельгії';
  private readonly DEFAULT_DESC = 'SVOI допомагає новоприбулим у Бельгії: навігація по CPAS/OCMW, Actiris та VDAB. Підтримка штучного інтелекту рідною мовою.';
  private readonly DEFAULT_KEYWORDS = 'біженці, бельгія, допомога, CPAS, OCMW, Actiris, VDAB, імміграція';

  updateMetaTags(config: SeoConfig): void {
    const fullTitle = config.title.includes('SVOI') ? config.title : `${config.title} | SVOI`;
    
    this.title.setTitle(fullTitle);

    // Основні теги
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords || this.DEFAULT_KEYWORDS });

    // Robots
    this.meta.updateTag({ 
      name: 'robots', 
      content: config.noIndex ? 'noindex, nofollow' : 'index, follow' 
    });

    // Open Graph (Facebook, Telegram)
    this.meta.updateTag({ property: 'og:title', content: config.ogTitle || fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.ogDescription || config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: config.ogSiteName || 'SVOI' });
    
    if (config.ogUrl) this.meta.updateTag({ property: 'og:url', content: config.ogUrl });
    if (config.ogImage) this.meta.updateTag({ property: 'og:image', content: config.ogImage });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: config.twitterCard || 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.twitterTitle || fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.twitterDescription || config.description });
    if (config.twitterImage) this.meta.updateTag({ name: 'twitter:image', content: config.twitterImage });

    // Оновлення Canonical URL
    if (config.canonicalUrl) {
      this.setCanonicalUrl(config.canonicalUrl);
    }
  }

  setCanonicalUrl(url: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  resetMetaTags(): void {
    this.updateMetaTags({
      title: this.DEFAULT_TITLE,
      description: this.DEFAULT_DESC,
      keywords: this.DEFAULT_KEYWORDS,
      ogImage: 'https://svoi.website/assets/og-image.png' // Ваша буква "ї" або "S"
    });
  }
}