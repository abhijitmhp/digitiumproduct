import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  title:string;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.parent.url.subscribe(res=>{
      console.log('--events-->',res[0].toString());
      this.title = res[0].toString().replace('-',' ').toUpperCase();
    },err=>{
      console.log('--err in events-->',err);
    })
    // this.router.events.subscribe(res=>{
    //   console.log('--events-->',res);
      
    // },err=>{
    //   console.log('--err in events-->',err);
    // })
  }

}
