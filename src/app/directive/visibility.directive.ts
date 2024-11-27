import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[visibility]',
    standalone: true
})
export class VisibilityDirective {

    constructor(private templateRef : TemplateRef<any>, private resolver: ViewContainerRef) {}

    @Input() set visibility(condition: boolean) {
        if (condition) {
            this.resolver.createEmbeddedView(this.templateRef);
        } else {
            this.resolver.clear();
        }
    }

}