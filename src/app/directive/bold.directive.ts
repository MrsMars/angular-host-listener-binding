import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[bold]'
})
export class BoldDirective {
	constructor(private elementRef: ElementRef, private renderer: Renderer2) {
		this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
		this.renderer.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
	}

	private fontWeight = "normal";

	@HostBinding("style.fontWeight") get getFontWeight() {
		return this.fontWeight;
	}

	@HostBinding("style.cursor") get getCursor() {
		return "pointer";
	}

	@HostListener("mouseenter") onMouseEnter() {
		this.setFontWeight("bold");
		this.fontWeight = "bold";
	}

	@HostListener("mouseleave") onMouseLeave() {
		this.setFontWeight("normal");
		this.fontWeight = "normal";
	}

	private setFontWeight(val: string) {
		this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);
	}
}