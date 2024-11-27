import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlighter]',
    standalone: true
})
export class HighlightDirective implements OnInit {

    @HostBinding('style.text-align') textAlign = 'center';

    @Input('defaultColor') defaultColor;

    constructor(private elementRef: ElementRef, private renderer : Renderer2) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = this.defaultColor;
        this.renderer.setStyle(this.elementRef.nativeElement,'color','blue');
    }

    @HostListener('mouseover') onMouseOver() {
        this.elementRef.nativeElement.style.backgroundColor = 'blue';
        this.renderer.setStyle(this.elementRef.nativeElement,'color','white');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
        this.renderer.setStyle(this.elementRef.nativeElement,'color','blue');
    }

}