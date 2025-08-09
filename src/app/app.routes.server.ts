import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'Home', renderMode: RenderMode.Server },
  { path: 'cart', renderMode: RenderMode.Server },
  { path: 'products', renderMode: RenderMode.Server },
  { path: 'categories', renderMode: RenderMode.Server },
  { path: 'brands', renderMode: RenderMode.Server },
  { path: 'allorders', renderMode: RenderMode.Server },
  { path: 'checkout/:id', renderMode: RenderMode.Server },
  { path: 'details/:id', renderMode: RenderMode.Server },
  { path: 'details2/:id', renderMode: RenderMode.Server },
  { path: 'login', renderMode: RenderMode.Server },
  { path: 'register', renderMode: RenderMode.Server },
  { path: 'forgot', renderMode: RenderMode.Server },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];