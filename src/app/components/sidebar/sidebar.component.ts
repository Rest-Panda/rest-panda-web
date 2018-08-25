import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: 'dashboard', title: 'Dashboard', icon: 'business_chart-bar-32', class: ''},
    {path: 'projects', title: 'Projects', icon: 'design-2_ruler-pencil', class: ''},
    {path: 'market', title: 'Bambu Market', icon: 'shopping_bag-16', class: ''},
    {path: 'integrations', title: 'Integrations', icon: 'education_atom', class: ''},
    {path: 'organization', title: 'Organization', icon: 'business_bank', class: ''},
    {path: 'user-profile', title: 'User Profile', icon: 'users_single-02', class: ''},
    {path: 'upgrade', title: 'Upgrade to PRO', icon: 'objects_spaceship', class: 'active-pro'}
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
}
