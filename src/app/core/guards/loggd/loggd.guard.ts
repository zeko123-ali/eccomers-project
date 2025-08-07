import { CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import {  Router,  } from '@angular/router';

export const loggdGuard: CanActivateFn = (route, state) => {
 const router =inject(Router)
const id =inject(PLATFORM_ID)

if (isPlatformBrowser(id)) {
  if (localStorage.getItem('mytoken') !==null) {
    router.navigate(['./Home'])
    return false  
}else{
  
    return true;
}
}else{
  return false
}
};

