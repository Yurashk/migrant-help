// markdown.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Pipe({ name: 'markdown' })
export class MarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const html = marked.parseInline(value) as string;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
